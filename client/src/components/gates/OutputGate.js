import React from "react";
import "./gates.css";
import { useSelector } from 'react-redux'; 

const OutputGate = (props) => {
  const active = false;

  return (
    <div className="output" {...props}>
      <div className={`outoutput1 ${active ? 'active' : 'inactive'}`}></div>
      {active ? (
        <span className="tekstiout">1</span>
      ) : (
        <span className="tekstiout">0</span>
      )}
    </div>
  );
};

export default OutputGate;
