require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const Ajv = require("ajv");
const mongoose = require('mongoose');
const eventSchema = require('./models/eventSchema');
const ajv = new Ajv();
const validateEvent = ajv.compile(eventSchema);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

mongoose.connect("mongodb://localhost:27017/analytics", { useNewUrlParser: true, useUnifiedTopology: true });

const Event = mongoose.model("Event", new mongoose.Schema({
  timestamp: Number,
  userId: String,
  eventId: String,
  sessionId: String,
  route: String,
  action: String,
  metadata: mongoose.Schema.Types.Mixed
}));

let rolling = [];
let dashboardClients = [];

app.post("/events", async (req, res) => {
  if (!validateEvent(req.body)) return res.status(400).send("Invalid event!");
  await new Event(req.body).save();
  rolling.push(req.body);
  res.json({ status: "ok" });
});

io.on("connection", (socket) => {
  dashboardClients.push(socket);
  socket.on("subscribe", data => socket.join(data.route || "default"));
  socket.on("disconnect", () => dashboardClients = dashboardClients.filter(s => s !== socket));
});

setInterval(() => {
  // Rolling window for last 60 seconds
  rolling = rolling.filter(e => Date.now() - e.timestamp < 60000);
  // Aggregates: events/sec, unique users, top routes
  const buckets = {};
  rolling.forEach(e => {
    const sec = Math.floor(e.timestamp/1000);
    if (!buckets[sec]) buckets[sec] = [];
    buckets[sec].push(e);
  });
  const recentKeys = Object.keys(buckets).slice(-60);
  const stats = recentKeys.map(sec => ({
    second: sec,
    events: buckets[sec].length,
    uniqueUsers: new Set(buckets[sec].map(e=>e.userId)).size,
    topRoutes: Object.entries(
      buckets[sec].reduce((acc,e) => (acc[e.route]=(acc[e.route]||0)+1, acc), {})
    ).sort((a,b)=>b[1]-a[1]).slice(0,3)
  }));
  dashboardClients.forEach(sock => sock.emit("analytics", stats));
}, 1000);

server.listen(PORT, () => console.log("Backend running on", PORT));
