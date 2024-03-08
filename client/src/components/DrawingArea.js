import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AndGate from "./gates/AndGate";
import OrGate from "./gates/OrGate";
import NotGate from "./gates/NotGate";
import NandGate from "./gates/NandGate";
import NorGate from "./gates/NorGate";
import XorGate from "./gates/XorGate";
import XnorGate from "./gates/XnorGate";
import { setCursorPosition } from "../store/actions/cursorActions";
import { updateGatePosition } from "../store/actions/gatesActions";
import "./DrawingArea.css";
import Draggable from "react-draggable";

const DrawingArea = () => {
  const dispatch = useDispatch();
  const gates = useSelector((state) => state.gates);
  const cursor = useSelector((state) => state.cursor);

  const handleClick = (event) => {
    const position = { x: event.clientX, y: event.clientY };
    console.log("Clicked at:", position, gates.gateType);
    dispatch(setCursorPosition(position));
    console.log(cursor);
    console.log(gates);
  };

  const handleStop = (event, data, gateId) => {
    console.log(gateId, { x: data.x, y: data.y });
    //dispatch(updateGatePosition(gateId, { x: data.x, y: data.y }));
  };

  const renderGate = (gate) => {
    switch (gate.gateType) {
      case "AND":
        return (
          <Draggable onStop={(e, data) => handleStop(e, data, gate.id)}>
            <div>
              <AndGate />
            </div>
          </Draggable>
        );
      case "OR":
        return (
          <Draggable onStop={(e, data) => handleStop(e, data, gate.id)}>
            <div>
              <OrGate />
            </div>
          </Draggable>
        );
      case "NOT":
        return (
          <Draggable onStop={(e, data) => handleStop(e, data, gate.id)}>
            <div>
              <NotGate />
            </div>
          </Draggable>
        );
      case "NAND":
        return (
          <Draggable onStop={(e, data) => handleStop(e, data, gate.id)}>
            <div>
              <NandGate />
            </div>
          </Draggable>
        );
      case "NOR":
        return (
          <Draggable onStop={(e, data) => handleStop(e, data, gate.id)}>
            <div>
              <NorGate />
            </div>
          </Draggable>
        );
      case "XOR":
        return (
          <Draggable onStop={(e, data) => handleStop(e, data, gate.id)}>
            <div>
              <XorGate />
            </div>
          </Draggable>
        );
      case "XNOR":
        return (
          <Draggable onStop={(e, data) => handleStop(e, data, gate.id)}>
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
    <div class="container">
      <div className="drawing-area" onClick={handleClick}>
        {gates.map((gate) => (
          <div
            key={gate.id}
            style={{
              position: "relative",
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
