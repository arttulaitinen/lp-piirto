import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AndGate from "./gates/AndGate";
import OrGate from "./gates/OrGate";
import NotGate from "./gates/NotGate";
import InputGate from "./gates/InputGate";
import OutputGate from "./gates/OutputGate";
import { setCursorPosition } from "../store/actions/cursorActions";
import { updateGatePosition } from "../store/actions/gatesActions";
import { toggleGrid } from "../store/actions/gridActions";
import "./DrawingArea.css";
import Draggable from "react-draggable";


const DrawingArea = () => {
  const dispatch = useDispatch();
  const gates = useSelector((state) => state.gates);
  const cursor = useSelector((state) => state.cursor);
  const isGridVisible = useSelector((state) => state.isGridVisible);

  const connections = useSelector((state) => state.connections);
  const isConnectMode = useSelector((state) => state.isConnectMode);

  const [lineStart, setLineStart] = useState(null);
  const [lineEnd, setLineEnd] = useState(null);

  const handleClick = (event, gateType) => {
    const position = { x: event.clientX, y: event.clientY };
    console.log("Clicked at:", position, gateType);
    console.log(gates);
    console.log(lineStart);
    console.log(lineEnd);

  };

  const handleStop = (event, data, gateId, gateType) => {
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
      >
        {gates.map((gate) => (
          <Draggable
            bounds="parent"
            id={gate.id}
            key={gate.id}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
            style={{ position: 'relative' }} 
            position={gate.position}
          >
            {renderGate(gate)}
          </Draggable>
        ))}
      </div>
    </div>
  );
  
};

export default DrawingArea;
