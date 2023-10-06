import React from "react";
import "./ChipPosition.css";

const ChipPosition = ({x, y}) => {
    return (
      <div
        className="ChipPosition"
        style={{
          position: "absolute",
          top: `${y}vh`,
          left: `${x}vw`
        }}
      >
      </div>
    );
  };
  
  export default ChipPosition;