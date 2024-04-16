import React, { useState } from "react";
import "./gates.css";
import { useSelector } from 'react-redux';

const NorGate = (props) => {
  const [active1, setActive1] = useState(false);

  const handleClick1 = () => {
    setActive1(!active1);
  };

  const [active2, setActive2] = useState(false);

  const handleClick2 = () => {
    setActive2(!active2);
  };

  let outputState = false;

  outputState = ! (active1 || active2); 

  return (
    <div className="gates norGate" {...props}>
      NOR
      <div className={`input1 ${active1 ? 'activeio' : 'inactiveio'}`}onClick={handleClick1}></div>
      <div className={`input2 ${active2 ? 'activeio' : 'inactiveio'}`}onClick={handleClick2}></div>
      <div className={`output1 ${outputState ? 'activeio' : 'inactiveio'}`}></div>
    </div>
  );
};

export default NorGate;
