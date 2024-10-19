import "../styles/GrowthChart.css";
// src/GrowthChart.jsx
import React from "react";
const giraffeImage = "/images/giraffe2.png";

const GrowthChart = () => {
  return (
    <div className="chart-container">
      {/* Measurement Lines and Profile Pictures */}
      <img src={giraffeImage} alt="Giraffe" className="giraffe" />
      <div className="measurements">
        {/* Measurement Ticks and Labels */}
        {Array.from({ length: 18 }, (_, i) => (
          <div key={i} className="tick">
            <span>{(i + 1) * 10}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthChart;
