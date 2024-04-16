import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import AndGate from "./gates/AndGate";
import OrGate from "./gates/OrGate";
import NotGate from "./gates/NotGate";
import InputGate from "./gates/InputGate";
import OutputGate from "./gates/OutputGate";
import NandGate from "./gates/NandGate";
import NorGate from "./gates/NorGate";
import XnorGate from "./gates/XnorGate";
import XorGate from "./gates/XorGate";

import { setCursorPosition } from "../store/actions/cursorActions";
import { deleteGate, updateGatePosition } from "../store/actions/gatesActions";
import { updateConnectionPosition, deleteConnection } from "../store/actions/connectionsActions";
import { toggleGrid } from "../store/actions/gridActions";
import "./DrawingArea.css";
import Draggable from "react-draggable";

import BezierLine from "./BezierLine";

const DrawingArea = ({ isGridVisible, isDeleteMode, isConnectMode, toggleConnectMode }) => { 
  const dispatch = useDispatch();
  const gates = useSelector((state) => state.gates);
  const cursor = useSelector((state) => state.cursor);

  const connections = useSelector((state) => state.connections);

  const handleClick = (event) => {
    console.log(gates);
    console.log(connections);

    if (isDeleteMode) {
      console.log(event.currentTarget.id)
      dispatch(deleteGate(event.currentTarget.id));
    }
  };

  const handleDoubleClick = () => {
    toggleConnectMode(!isConnectMode);
  };

  const handleGateStop = (event, data, gateId, gateType) => {
    dispatch(updateGatePosition(gateId, gateType, { x: data.x, y: data.y }));
  };

  const renderGate = (gate) => {
    switch (gate.gateType) {
      case "AND":
        return (
            <div id={gate.id} onClick={handleClick}>
              <AndGate />
            </div>
        );
      case "OR":
        return (
          <div id={gate.id} onClick={handleClick}>
            <OrGate />
          </div>
      );
      case "NOT":
        return (
          <div id={gate.id} onClick={handleClick}>
            <NotGate />
          </div>
      );
      case "INPUT":
        return (
          <div id={gate.id} onClick={handleClick}>
            <InputGate />
          </div>
      );
      case "OUTPUT":
        return (
          <div id={gate.id} onClick={handleClick}>
            <OutputGate />
          </div>
      );
      case "NAND":
        return (
          <div id={gate.id} onClick={handleClick}>
            <NandGate />
          </div>
      );
      case "NOR":
        return (
          <div id={gate.id} onClick={handleClick}>
            <NorGate />
          </div>
      );
      case "XNOR":
        return (
          <div id={gate.id} onClick={handleClick}>
            <XnorGate />
          </div>
      );
      case "XOR":
        return (
          <div id={gate.id} onClick={handleClick}>
            <XorGate />
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
        onDoubleClick={handleDoubleClick}>
        {gates.map((gate) => (
          <Draggable
            bounds="parent"
            key={gate.id}
            id={gate.id}
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
              isDeleteMode={isDeleteMode}
            />))}
          </svg>
      </div>
    </div>
  );
  
};

export default DrawingArea; 
