import React from "react";
import "../styles/ChevronButton.scss";

const ChevronButton = ({ isActive }) => (
  <span className={`chevron-btn${isActive ? " active" : ""}`}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isActive ? "#4b81e8" : "none"}
      stroke="#4b81e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron"
      style={{
        transform: isActive
          ? "rotate(90deg) scale(1.2)"
          : "rotate(0deg) scale(1)",
        transition: "transform 0.3s cubic-bezier(.58,.28,.87,.53)",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </span>
);

export default ChevronButton;
