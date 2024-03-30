import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AndGate from "./gates/AndGate";
import OrGate from "./gates/OrGate";
import NotGate from "./gates/NotGate";
import NandGate from "./gates/NandGate";
import NorGate from "./gates/NorGate";
import XorGate from "./gates/XorGate";
import XnorGate from "./gates/XnorGate";
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

  const handleClick = (event, gateType) => {
    const position = { x: event.clientX, y: event.clientY };
    console.log("Clicked at:", position, gateType);
    //dispatch(setCursorPosition(position));
    console.log(gates);
    console.log(connections);
    console.log(isConnectMode);
  };

  const handleStop = (event, data, gateId, gateType) => {
    dispatch(updateGatePosition(gateId, gateType, { x: data.x, y: data.y }));
  };

  const renderGate = (gate) => {
    switch (gate.gateType) {
      case "AND":
        return (
          <Draggable
            //bounds={{ top: -400, left: -420, right: 420, bottom: 460 }}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
          >
            <div>
              <AndGate />
            </div>
          </Draggable>
        );
      case "OR":
        return (
          <Draggable
            bounds={{ top: -400, left: -420, right: 420, bottom: 460 }}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
          >
            <div>
              <OrGate />
            </div>
          </Draggable>
        );
      case "NOT":
        return (
          <Draggable
            bounds={{ top: -400, left: -420, right: 420, bottom: 460 }}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
          >
            <div>
              <NotGate />
            </div>
          </Draggable>
        );
      case "NAND":
        return (
          <Draggable
            bounds={{ top: -400, left: -420, right: 420, bottom: 460 }}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
          >
            <div>
              <NandGate />
            </div>
          </Draggable>
        );
      case "NOR":
        return (
          <Draggable
            bounds={{ top: -400, left: -420, right: 420, bottom: 460 }}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
          >
            <div>
              <NorGate />
            </div>
          </Draggable>
        );
      case "XOR":
        return (
          <Draggable
            bounds={{ top: -400, left: -420, right: 420, bottom: 460 }}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
          >
            <div>
              <XorGate />
            </div>
          </Draggable>
        );
      case "XNOR":
        return (
          <Draggable
            bounds={{ top: -400, left: -420, right: 420, bottom: 460 }}
            onStop={(e, data) => handleStop(e, data, gate.id, gate.gateType)}
          >
            <div>
              <XnorGate />
            </div>
          </Draggable>
        );
      default:
        return;
    }
  };

  return (
    <div className="container">
      <div
        className={`drawing-area ${
          isGridVisible ? "gridlines" : "drawing-area"
        }`}
        onClick={handleClick}
      >
        {gates.map((gate) => (
          <div
            key={gate.id}
            style={{
              position: "static",
              left: gate.position?.x,
              top: gate.position?.y,
            }}
          >
            {renderGate(gate)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawingArea;
