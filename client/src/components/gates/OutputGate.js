import React, { useState } from "react";
import "./gates.css";
import { useSelector } from 'react-redux'; 

const OutputGate = (props) => {
  const [active, setActive] = useState(false);
  
  const handleDoubleClick = () => {
    setActive(!active);
  };

  return (
    <div className="output" {...props}>
      <div className={`outoutput1 ${active ? 'active' : 'inactive'}`} onDoubleClick={handleDoubleClick}></div>
      {active ? (
        <span className="tekstiout">1</span>
      ) : (
        <span className="tekstiout">0</span>
      )}
    </div>
  );
};

export default OutputGate;
