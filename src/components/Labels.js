import React from "react";

const Labels = ({ color, labelValue }) => {
  return (
    <div>
      <label>{labelValue}</label>
      <p className="labels" style={{ color: color }}>
        Label
      </p>
    </div>
  );
};

export default Labels;
