import React from "react";
import "./gates.css";
import { useSelector } from 'react-redux';

const NotGate = (props) => {
  let inputState = true;
  let outputState = null; 

  if (inputState === false) {
    outputState = true;
  } 
  else {
    outputState = false;
  }

  return (
    <div className="gates notGate" {...props}>
      <span style={{ position: 'relative', right: '14px' }}>NOT</span>
      <div className={`notinput1 ${inputState ? 'active' : 'inactive'}`}></div>
      <div className={`output1 ${outputState ? 'active' : 'inactive'}`}></div>
    </div>
  );
};

export default NotGate;
