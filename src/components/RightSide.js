import React from "react";
import Header from "./Header";
import Inputs from "./Inputs";
import Labels from "./Labels";

const RightSide = () => {
  return (
    <div className="grids">
      <Header />
      <div className="grp-1">
        <div>
          <Labels labelValue="<Inputs />" />
          <Inputs inputId="input1" inputPlaceHolder="Placeholder" />
        </div>
        <div>
          <Labels labelValue="&:hover" />
          <Inputs inputId="input2" inputPlaceHolder="Placeholder" />
        </div>
        <div>
          <Labels labelValue=" &:focus" color="blue" />
          <Inputs inputId="input3" inputPlaceHolder="Placeholder" />
        </div>
        <div>
          <Labels labelValue="<input error />" color="red" />
          <Inputs inputId="input4" inputPlaceHolder="Placeholder" />
        </div>
        <div>
          <Labels labelValue="&:hover" />
          <Inputs inputId="input5" inputPlaceHolder="Placeholder" />
        </div>
        <div>
          <Labels labelValue="&:focus" />
          <Inputs inputId="input6" inputPlaceHolder="Placeholder" />
        </div>
      </div>
      <div>
        <div className="grp-x">
          <Labels labelValue="<Inputs disabled />" />
          <input
            className="inputs"
            inputId="input7"
            placeholder="Placeholder"
            disabled
          />
        </div>
      </div>
      <div className="grp-2">
        <div>
          <Labels labelValue="<Inputs helperText= 'Some interesting text' />" />
          <Inputs inputId="input8" inputPlaceHolder="Placeholder" />
          <span className="helperText" style={{ color: "#333333" }}>
            Some interesting text
          </span>
        </div>
        <div>
          <Labels labelValue="<Inputs helperText= 'Some interesting text' error />" />
          <Inputs inputId="input9" inputPlaceHolder="Disabled" />
          <span className="helperText">Some interesting text</span>
        </div>
        <div>
          <Labels labelValue="<Inputs startIcon/>" />
          <Inputs
            inputId="input10"
            inputPlaceHolder="Placeholder"
            iconNameStart="phone"
          />
        </div>
        <div>
          <Labels labelValue="<Inputs endIcon/>" />
          <Inputs
            inputId="input11"
            inputPlaceHolder="Placeholder"
            iconNameEnd="lock"
          />
        </div>
      </div>
      <div className="grp-x">
        <div>
          <Labels labelValue="<Inputs value='text'/>" />
          <Inputs
            inputId="input12"
            inputPlaceHolder="Placeholder"
            inputValue="Text"
          />
        </div>
      </div>
      <div className="grp-3">
        <div>
          <Labels labelValue="<Inputs size='sm'/>" />
          <Inputs inputId="input13" inputPlaceHolder="Placeholder" />
        </div>
        <div>
          <Labels labelValue="<Inputs size='md'/>" />
          <Inputs inputId="input14" inputPlaceHolder="Placeholder" />
        </div>
        <div>
          <Labels labelValue="<Inputs fullWidth/>" />
          <Inputs
            inputId="input15"
            inputPlaceHolder="Placeholder"
            inputValue="Text"
          />
        </div>
      </div>

      <div className="grp-4">
        <div>
          <Labels labelValue="<Inputs multiline row=4 />" />
          <textarea
            name=""
            className="textarea"
            cols="30"
            rows="8"
            placeholder="Placeholder"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
