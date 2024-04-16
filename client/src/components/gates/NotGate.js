import React, { useState } from "react";
import "./gates.css";
import { useSelector } from 'react-redux';

const NotGate = (props) => {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
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
      <div className={`notinput1 ${active ? 'activeio' : 'inactiveio'}`}onClick={handleClick}></div>
      <div className={`output1 ${outputState ? 'activeio' : 'inactiveio'}`}onClick={handleClick}></div>
    </div>
  );
};

export default NotGate;
