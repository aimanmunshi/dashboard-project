import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import './SalesChart.css';

const data = [
  { name: 'Mon', Pixel: 300, Ample: 400 },
  { name: 'Tue', Pixel: 250, Ample: 390 },
  { name: 'Wed', Pixel: 320, Ample: 350 },
  { name: 'Thu', Pixel: 200, Ample: 360 },
  { name: 'Fri', Pixel: 260, Ample: 400 },
  { name: 'Sat', Pixel: 340, Ample: 230 },
  { name: 'Sun', Pixel: 200, Ample: 300 },
];

const SalesChart = () => {
  return (
    <div className="sales-chart-container">
      <div className="sales-header">
        <h3>Sales Overview</h3>
        <p>Ample Admin Vs Pixel Admin</p>
      </div>
    <div className="sales-chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={8}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="Pixel" fill="#2ad2c9" radius={[10, 10, 0, 0]} />
            <Bar dataKey="Ample" fill="#007bff" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
