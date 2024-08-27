import React, { useState, useEffect } from "react";

export default function TrafficLight({ trafficStates }) {
  // eslint-disable-next-line
  const [currentColor, setCurrentColor] = useState("green");
  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);
  return (
    <div className="traffic-light-container">
      {Object.keys(trafficStates).map((color) => (
        <div
          className="traffic-light"
          style={{
            backgroundColor:
              color === currentColor && trafficStates[color].backgroundColor,
          }}
        />
      ))}
    </div>
  );
}
