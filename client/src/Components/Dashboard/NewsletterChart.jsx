import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import './NewsletterChart.css';

const data = [
  { time: 'AM 9', recurring: 105, openRate: 75 },
  { time: 'PM 12', recurring: 90, openRate: 60 },
  { time: 'PM 15', recurring: 92, openRate: 78 },
  { time: 'PM 18', recurring: 110, openRate: 80 },
  { time: 'PM 19', recurring: 90, openRate: 60 },
];

const NewsletterChart = () => {
  return (
    <div className="newsletter-chart-container">
      <div className="newsletter-header">
        <div className="legend-left">
          <span className="legend-dot" style={{ backgroundColor: '#2ad2c9' }}></span>
          <span className="legend-label">Recurring Payments</span>
          <span className="legend-dot" style={{ backgroundColor: '#007bff', marginLeft: '20px' }}></span>
          <span className="legend-label">Open Rate</span>
        </div>
        <div className="newsletter-title">
          <h3>Newsletter Campaign</h3>
          <p>Overview of Newsletter Campaign</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRecurring" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2ad2c9" stopOpacity={0.4}/>
              <stop offset="100%" stopColor="#2ad2c9" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="colorOpenRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#007bff" stopOpacity={0.4}/>
              <stop offset="100%" stopColor="#007bff" stopOpacity={0.05}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="time" />
          <YAxis domain={[30, 120]} />
          <Tooltip />
          <Area type="monotone" dataKey="recurring" stroke="#2ad2c9" fill="url(#colorRecurring)" strokeWidth={2} />
          <Area type="monotone" dataKey="openRate" stroke="#007bff" fill="url(#colorOpenRate)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="newsletter-metrics">
        <div className="metric-box">
          <h2>5098</h2>
          <p>Click Rate</p>
        </div>
        <div className="metric-box">
          <h2>4156</h2>
          <p>Mail Open Rate</p>
        </div>
        <div className="metric-box">
          <h2>5098</h2>
          <p>Total Sent</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterChart;
