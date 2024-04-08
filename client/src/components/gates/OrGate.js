import React from "react";
import "./gates.css";
import { useSelector } from 'react-redux';

const OrGate = (props) => {
  let input1State = false;
  let input2State = true; 
  let outputState = false; 

  outputState = input1State || input2State;

  return (
    <div className="gates orGate" {...props}>
      <span style={{ position: 'relative', right: '6px' }}>OR</span> 
      <div className={`input1 ${input1State ? 'active' : 'inactive'}`}></div>
      <div className={`input2 ${input2State ? 'active' : 'inactive'}`}></div>
      <div className={`output1 ${outputState ? 'active' : 'inactive'}`}></div>
    </div>
  );
};

export default OrGate;