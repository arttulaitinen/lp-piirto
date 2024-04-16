import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import AndGate from "./gates/AndGate";
import OrGate from "./gates/OrGate";
import NotGate from "./gates/NotGate";
import InputGate from "./gates/InputGate";
import OutputGate from "./gates/OutputGate";
import { setCursorPosition } from "../store/actions/cursorActions";
import { updateGatePosition } from "../store/actions/gatesActions";
import { updateConnectionPosition } from "../store/actions/connectionsActions";
import { toggleGrid } from "../store/actions/gridActions";
import "./DrawingArea.css";
import Draggable from "react-draggable";

import BezierLine from "./BezierLine";

const DrawingArea = ({ isGridVisible, isDeleteMode }) => { 
  const dispatch = useDispatch();
  const gates = useSelector((state) => state.gates);
  const cursor = useSelector((state) => state.cursor);

  const connections = useSelector((state) => state.connections);

  const handleClick = (event) => {
    console.log(gates);
    console.log(connections);
    console.log(isDeleteMode);

    console.log(event.id);

    if (isDeleteMode) {
    }
  };

  const [isConnectMode, setIsConnectMode] = useState(false);

  const handleDoubleClick = () => {
    setIsConnectMode(!isConnectMode);
  };

  const handleGateStop = (event, data, gateId, gateType) => {
    dispatch(updateGatePosition(gateId, gateType, { x: data.x, y: data.y }));
  };

  const renderGate = (gate) => {
    switch (gate.gateType) {
      case "AND":
        return (
            <div>
              <AndGate />
            </div>
        );
      case "OR":
        return (
          <div>
            <OrGate />
          </div>
      );
      case "NOT":
        return (
          <div>
            <NotGate />
          </div>
      );
      case "INPUT":
        return (
          <div>
            <InputGate />
          </div>
      );
      case "OUTPUT":
        return (
          <div>
            <OutputGate />
          </div>
      );
      default:
        return;
    }
  };


  return (
    <div className="container">
      <div
        className={`drawing-area ${isGridVisible ? "gridlines" : ""}`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}>
        {gates.map((gate) => (
          <Draggable
            bounds="parent"
            id={gate.id}
            key={gate.id}
            onStop={(e, data) => handleGateStop(e, data, gate.id, gate.gateType)}
            style={{ position: 'relative' }} 
            position={gate.position}
          >
            {renderGate(gate)}
          </Draggable>
        ))}
          <svg style={{ position: 'relative', pointerEvents: isConnectMode ? '' : 'none' }}>
          {connections.map((connection) => (
            <BezierLine
              key={connection.id}
              id={connection.id}
              start={connection.start}
              end={connection.end}
            />))}
          </svg>
      </div>
    </div>
  );
  
};

export default DrawingArea; 
