import React, { useState } from "react";
import "./gates.css";
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from "../../store/actions/gatesActions";

const InputGate = (props) => {
    const [active, setActive] = useState(false);
  
    const handleClick = () => {
      setActive(!active);
    };
    
    return (
        <div className="input" {...props}>
          <div className={`ininput1 ${active ? 'activeio' : 'inactiveio'}`} onClick={handleClick}></div>
          {active ? (
            <span className="teksti">1</span>
          ) : (
            <span className="teksti">0</span>
          )}
        </div>
      );
    };

export default InputGate;
