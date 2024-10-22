import React, { useRef } from "react";
import "../styles/GrowthChart.css";

const giraffeImage = "/images/giraffe2.png";
const measurements = Array.from({ length: 16 }, (_, i) => (18 - i) * 10);

const GrowthChart = () => {
  const lensRef = useRef(null);
  const measurementsRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = measurementsRef.current.getBoundingClientRect();

    // Calculate cursor's position relative to the measurements div
    const x = e.clientX - rect.left - 30;
    const y = e.clientY - rect.top - 30;

    // Show and position the lens
    const lens = lensRef.current;
    lens.style.display = "block";
    lens.style.left = `${x + 60 - lens.offsetWidth / 2}px`;
    lens.style.top = `${y - lens.offsetHeight / 2}px`;

    // Adjust zoomed content inside the lens to align correctly
    const zoomedContent = lens.querySelector(".zoomed-content");

    // Adjust for scrolling offsets if the page is scrolled
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Adjust zoomed content's position relative to the cursor
    zoomedContent.style.left = `${-(x + scrollX) * 2}px`; // 2x magnification factor
    zoomedContent.style.top = `${-(y + scrollY) * 2}px`;
  };

  const handleMouseLeave = () => {
    const lens = lensRef.current;
    lens.style.display = "none"; // Hide the lens

    // Remove the blur effect
    measurementsRef.current.classList.remove("blurred");
  };

  return (
    <div className="chart-container">
      {/* Giraffe Image */}
      <img src={giraffeImage} alt="Giraffe" className="giraffe" />

      {/* Measurements */}
      <div
        className="measurements"
        ref={measurementsRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {measurements.map((value) => (
          <div className="measurement-quantity" key={value}>
            <span>{value}</span>
            <div className="ticks">
              {value === 180 ? (
                <div className="big-tick-180">___</div>
              ) : (
                <>
                  <div className="small-tick" key={`${value}-1`}>
                    _
                  </div>
                  <div className="small-tick" key={`${value}-2`}>
                    _
                  </div>
                  <div className="small-tick" key={`${value}-3`}>
                    _
                  </div>
                  <div className="small-tick" key={`${value}-4`}>
                    _
                  </div>
                  <div className="big-tick" key={`${value}-5`}>
                    __
                  </div>
                  <div className="small-tick" key={`${value}-6`}>
                    _
                  </div>
                  <div className="small-tick" key={`${value}-7`}>
                    _
                  </div>
                  <div className="small-tick" key={`${value}-8`}>
                    _
                  </div>
                  <div className="small-tick" key={`${value}-9`}>
                    _
                  </div>
                  <div className="big-tick" key={`${value}-10`}>
                    ____
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Zoom Lens */}
        <div ref={lensRef} className="zoom-lens">
          <div className="zoomed-content">
            {measurements.map((value) => (
              <div className="measurement-quantity" key={value}>
                <span>{value}</span>
                <div className="ticks">
                  {value === 180 ? (
                    <div className="big-tick-180">___</div>
                  ) : (
                    <>
                      <div className="small-tick" key={`${value}-1`}>
                        _
                      </div>
                      <div className="small-tick" key={`${value}-2`}>
                        _
                      </div>
                      <div className="small-tick" key={`${value}-3`}>
                        _
                      </div>
                      <div className="small-tick" key={`${value}-4`}>
                        _
                      </div>
                      <div className="big-tick" key={`${value}-5`}>
                        ___
                      </div>
                      <div className="small-tick" key={`${value}-6`}>
                        _
                      </div>
                      <div className="small-tick" key={`${value}-7`}>
                        _
                      </div>
                      <div className="small-tick" key={`${value}-8`}>
                        _
                      </div>
                      <div className="small-tick" key={`${value}-9`}>
                        _
                      </div>
                      <div className="big-tick" key={`${value}-10`}>
                        ____
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;
