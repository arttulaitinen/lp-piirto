import React from "react";
import "./gates.css";
import { useSelector } from 'react-redux';

const InputGate = (props) => {
    const active = true;
  
    return (
        <div className="input" {...props}>
          <div className={`ininput1 ${active ? 'active' : 'inactive'}`}></div>
          {active ? (
            <span className="teksti">1</span>
          ) : (
            <span className="teksti">0</span>
          )}
        </div>
      );
    };

export default InputGate;
