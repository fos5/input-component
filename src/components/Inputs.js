import React from "react";

const Inputs = ({
  inputId,
  inputPlaceHolder,
  iconNameStart,
  iconNameEnd,
  inputValue,
}) => {
  return (
    <div>
      <i className="material-icons">{iconNameStart}</i>

      <input
        type="text"
        className={` ${inputId} inputs`}
        placeholder={inputPlaceHolder}
        value={inputValue}
      />
      <i className="material-icons">{iconNameEnd}</i>
    </div>
  );
};

export default Inputs;
