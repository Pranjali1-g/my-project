import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Line } from "react-chartjs-2";
import {
  Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js'; import 'chartjs-plugin-zoom';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [aggregates, setAggregates] = useState([]);
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.emit("subscribe", { route: "/dashboard" });
    socket.on("analytics", setAggregates);
    return () => socket.disconnect();
  }, []);
  const labels = aggregates.map(e => new Date(e.second*1000).toLocaleTimeString());
  return (
    <div style={{maxWidth:900,margin:"40px auto"}}>
      <h2>Real-Time Analytics Dashboard</h2>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Events/sec",
              data: aggregates.map(e=>e.events),
              borderColor: "#1565c0", backgroundColor: "rgba(21,101,192,0.25)", fill:true, tension:0.4,
            },
            {
              label: "Unique Users",
              data: aggregates.map(e=>e.uniqueUsers),
              borderColor: "#43a047", backgroundColor: "rgba(67,160,71,0.20)", fill:true, tension:0.4,
            }
          ]
        }}
        options={{
          plugins:{
            legend:{position:"top"},
            zoom: { pan:{enabled:true,mode:"x"}, zoom: { wheel:{enabled:true}, mode:"x" } }
          },
          scales: {
            x: { title:{display:true,text:"Time"} },
            y: { beginAtZero:true, title:{display:true,text:"Count"} }
          }
        }}
        height={350}
      />
      <h4>Top Routes (Last Minute)</h4>
      <ul>
        {aggregates.length>0 && aggregates[aggregates.length-1].topRoutes.map(([route, count]) =>
          <li key={route}>{route}: {count} events</li>
        )}
      </ul>
    </div>
  );
}
