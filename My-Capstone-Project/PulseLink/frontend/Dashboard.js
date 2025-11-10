import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const [readings, setReadings] = useState([]);
  const [view, setView] = useState("menu");

  useEffect(() => {
    socket.on("newReading", (data) => {
      setReadings((prev) => [...prev.slice(-200), data]);
      // Alerts for all vitals
      if (data.heartRate > 100) toast.warning("💓 Heart rate too high!");
      else if (data.heartRate < 50) toast.warning("💓 Heart rate too low!");
      if (data.spo2 < 92) toast.error("🫁 Oxygen critically low!");
      else if (data.spo2 > 100) toast.info("🫁 Oxygen unusually high!");
      if (data.temperature > 38) toast.warning("🌡️ Fever detected!");
      else if (data.temperature < 35) toast.info("❄️ Temperature too low!");
    });
    return () => socket.off("newReading");
  }, []);

  const times = readings.map((r) =>
    new Date(r.timestamp).toLocaleTimeString("en-IN", { hour12: false })
  );
  const heart = readings.map((r) => r.heartRate);
  const spo2 = readings.map((r) => r.spo2);
  const temp = readings.map((r) => r.temperature);

  const baseOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: "#e5e7eb", font: { size: 24 } } } },
    scales: {
      x: { ticks: { color: "#9ca3af", font: { size: 22 } } },
      y: { ticks: { color: "#9ca3af", font: { size: 22 } } },
    },
  };

  const heartData = {
    labels: times,
    datasets: [
      {
        label: "Heart Rate (bpm)",
        data: heart,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.3)",
        borderWidth: 6,
        tension: 0.4,
      },
    ],
  };

  const tempData = {
    labels: times,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temp,
        backgroundColor: "#3b82f6",
        borderWidth: 4,
      },
    ],
  };

  const spo2Data = {
    labels: ["Oxygen", "Remaining"],
    datasets: [
      {
        data: [spo2.at(-1) || 0, 100 - (spo2.at(-1) || 0)],
        backgroundColor: ["#10b981", "#1f2937"],
        borderWidth: 0,
      },
    ],
  };

  const combinedData = {
    labels: times,
    datasets: [
      {
        label: "Heart Rate",
        data: heart,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.3)",
        tension: 0.3,
        borderWidth: 5,
      },
      {
        label: "Temperature",
        data: temp,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.3)",
        tension: 0.3,
        borderWidth: 5,
      },
      {
        label: "SpO₂",
        data: spo2,
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.3)",
        tension: 0.3,
        borderWidth: 5,
      },
    ],
  };

  const goBack = () => setView("menu");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 overflow-hidden flex flex-col items-center justify-center">
      <AnimatePresence>
        {view === "menu" && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            className="flex flex-col items-center justify-center h-screen w-full"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold text-cyan-400 text-center mb-8">
              💓 Welcome to PulseLink
            </h1>
            <p className="text-3xl text-gray-300 mb-16 text-center max-w-3xl">
              Real-time Health Monitoring Dashboard
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 w-full max-w-6xl">
              {[
                "Heart Rate",
                "Oxygen Level",
                "Temperature",
                "All Graphs Together",
              ].map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setView(
                      item === "Heart Rate"
                        ? "heart"
                        : item === "Oxygen Level"
                        ? "spo2"
                        : item === "Temperature"
                        ? "temp"
                        : "all"
                    )
                  }
                  className="bg-gray-800/90 hover:bg-gray-700 border border-gray-600 text-4xl md:text-5xl font-bold py-16 rounded-3xl shadow-2xl text-cyan-300 transition-all"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {view !== "menu" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-screen h-screen p-8 flex flex-col items-center justify-center relative"
          >
            <button
              onClick={goBack}
              className="absolute top-6 right-8 bg-cyan-600 px-8 py-4 rounded-xl text-3xl font-semibold hover:bg-cyan-700 transition"
            >
              ⬅ Back
            </button>

            <h2 className="text-5xl font-bold text-center mb-10 text-cyan-400 drop-shadow-lg">
              {view === "heart"
                ? "💓 Heart Rate Monitor"
                : view === "temp"
                ? "🌡️ Temperature Monitor"
                : view === "spo2"
                ? "🫁 Oxygen Level Monitor"
                : "📊 All Parameters Overview"}
            </h2>

            {view === "all" ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-[80vh]">
                <div className="bg-gray-900 rounded-3xl p-4 h-full">
                  <Line data={heartData} options={baseOpts} />
                </div>
                <div className="bg-gray-900 rounded-3xl p-4 h-full">
                  <Bar data={tempData} options={baseOpts} />
                </div>
                <div className="bg-gray-900 rounded-3xl p-4 flex items-center justify-center h-full">
                  <Doughnut data={spo2Data} options={baseOpts} />
                </div>
              </div>
            ) : (
              <div className="w-[95vw] h-[80vh] bg-gray-900 rounded-3xl shadow-2xl p-8">
                {view === "heart" && <Line data={heartData} options={baseOpts} />}
                {view === "temp" && <Bar data={tempData} options={baseOpts} />}
                {view === "spo2" && <Doughnut data={spo2Data} options={baseOpts} />}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
