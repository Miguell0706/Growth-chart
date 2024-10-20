import "../styles/GrowthChart.css";
// src/GrowthChart.jsx
import React from "react";
const giraffeImage = "/images/giraffe2.png";
const measurements = Array.from({ length: 16 }, (_, i) => (18 - i) * 10);

const GrowthChart = () => {
  return (
    <div className="chart-container">
      {/* Giraffe Image */}
      <img src={giraffeImage} alt="Giraffe" className="giraffe" />

      {/* Measurement Lines and Profile Pictures */}
      <div className="measurements">
        {measurements.map((value) => (
          <div className="measurement-quantity" key={value}>
            <span>{value}</span>
            <div className="ticks">
              {value === 180 ? (
                <div className="big-tick-180">_____</div>
              ) : (
                <>
                  <div className="small-tick" key={`${value}-1`}>
                    __
                  </div>
                  <div className="small-tick" key={`${value}-2`}>
                    __
                  </div>
                  <div className="small-tick" key={`${value}-3`}>
                    __
                  </div>
                  <div className="small-tick" key={`${value}-4`}>
                    __
                  </div>
                  <div className="big-tick" key={`${value}-5`}>
                    ____
                  </div>
                  <div className="small-tick" key={`${value}-6`}>
                    __
                  </div>
                  <div className="small-tick" key={`${value}-7`}>
                    __
                  </div>
                  <div className="small-tick" key={`${value}-8`}>
                    __
                  </div>
                  <div className="small-tick" key={`${value}-9`}>
                    __
                  </div>
                  <div className="big-tick" key={`${value}-10`}>
                    ______
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthChart;
