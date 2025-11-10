const axios = require('axios');
setInterval(() => {
  axios.post("http://localhost:5000/events", {
    timestamp: Date.now(),
    userId: "u"+Math.floor(Math.random()*1000),
    eventId: "evt"+Math.random(),
    sessionId: "sess"+Math.floor(Math.random()*100),
    route: ["/dashboard","/home","/profile"][Math.floor(Math.random()*3)],
    action: "click",
    metadata: {}
  });
}, 200);
