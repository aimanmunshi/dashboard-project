import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import './VisitorsChart.css';

const data = [
  { name: 'Tablet', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Mobile', value: 300 },
];

const COLORS = ['#2ad2c9', '#6f42c1', '#007bff'];

const VisitorsChart = () => {
  return (
    <div className="visitors-chart-card">
      <h3 className="visitors-title">Our Visitors</h3>
      <p className="visitors-subtitle">Different Devices Used to Visit</p>

      <div className="visitors-pie-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorsChart;
