import React from 'react';
import './InfoBox.css';

const InfoBox = ({ bgColor, title, subtitle, value, icon, children }) => {
  return (
    <div className="info-box" style={{ backgroundColor: bgColor }}>
      <div className="info-box-header">
        <div>
          <p className="info-box-title">{title}</p>
          <p className="info-box-subtitle">{subtitle}</p>
        </div>
        <div className="info-box-icon">{icon}</div>
      </div>
      <div className="info-box-body">
        {children}
        <div className="info-box-value">{value}</div>
      </div>
    </div>
  );
};

export default InfoBox;
