import React, { useState } from "react";
import "./gates.css";
import { useSelector } from 'react-redux';

const NotGate = (props) => {
  const [active, setActive] = useState(false);
  
  const handleDoubleClick = () => {
    setActive(!active);
  };
  
  let outputState = null; 

  if (active === false) {
    outputState = true;
  } 
  else {
    outputState = false;
  }

  return (
    <div className="gates notGate" {...props}>
      <span style={{ position: 'relative', right: '14px' }}>NOT</span>
      <div className={`notinput1 ${active ? 'active' : 'inactive'}`}onDoubleClick={handleDoubleClick}></div>
      <div className={`output1 ${outputState ? 'active' : 'inactive'}`}onDoubleClick={handleDoubleClick}></div>
    </div>
  );
};

export default NotGate;
