import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AndGate from "./gates/AndGate";
import { setCursorPosition } from "../store/actions/cursorActions";
import "./DrawingArea.css";

const DrawingArea = () => {
  const dispatch = useDispatch();
  const gates = useSelector((state) => state.gates);
  const cursor = useSelector((state) => state.cursor);

  const handleClick = (event) => {
    const position = { x: event.clientX, y: event.clientY };
    console.log("Clicked at:", position);
    dispatch(setCursorPosition(position));
    console.log(cursor);
  };

  const renderGate = (gate) => {
    switch (gate.gateType) {
      case "AND":
        return <AndGate key={gate.id} />;
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
