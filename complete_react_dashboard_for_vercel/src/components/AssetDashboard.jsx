
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AssetDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://asset-correlation-backend.onrender.com/api/asset-correlation")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Asset Correlation Dashboard</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="gold" stroke="#FFD700" name="Gold" />
          <Line type="monotone" dataKey="stocks" stroke="#3366CC" name="S&P 500" />
          <Line type="monotone" dataKey="usd" stroke="#228B22" name="USD Index" />
          <Line type="monotone" dataKey="oil" stroke="#8B0000" name="Oil Price" />
          <Line type="monotone" dataKey="bitcoin" stroke="#FF9900" name="Bitcoin" />
          <Line type="monotone" dataKey="realestate" stroke="#9932CC" name="Real Estate" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
