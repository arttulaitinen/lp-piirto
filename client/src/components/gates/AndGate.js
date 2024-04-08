import React from "react";
import "./gates.css";
import { useSelector } from 'react-redux';

const AndGate = (props) => {
  let input1State = true;
  let input2State = true;
  let outputState = false;

  outputState = input1State && input2State; 

  return (
    <div className="gates andGate" {...props}>
      AND
      <div className={`input1 ${input1State ? 'active' : 'inactive'}`}></div>
      <div className={`input2 ${input2State ? 'active' : 'inactive'}`}></div>
      <div className={`output1 ${outputState ? 'active' : 'inactive'}`}></div>
    </div>
  );
};

export default AndGate;
