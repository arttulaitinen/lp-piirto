import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AndGate from "./gates/AndGate";
import { updateGatePositions } from "../store/actions/gatesActions";
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

  const handleOnDragEnd = (result) => {
    console.log("Drag start");
    if (!result.destination) return;

    const reorderedGates = reorder(
      gates,
      result.source.index,
      result.destination.index
    );
    const draggedGate = reorderedGates.find(
      (gate) => gate.id === result.draggableId
    );

    const offsetX = result.destination.x - draggedGate.position.x;
    const offsetY = result.destination.y - draggedGate.position.y;

    console.log("result.destination.x:", result.destination.x);
    console.log("result.destination.y:", result.destination.y);
    console.log("draggedGate.position.x:", draggedGate.position.x);
    console.log("draggedGate.position.y:", draggedGate.position.y);
    console.log("offsetX:", offsetX);
    console.log("offsetY:", offsetY);

    const updatedGates = reorderedGates.map((gate) => {
      if (gate.id === result.draggableId) {
        return {
          ...gate,
          position: {
            x: gate.position.x + offsetX,
            y: gate.position.y + offsetY,
          },
        };
      } else {
        return gate;
      }
    });

    dispatch(updateGatePositions(updatedGates));
    console.log("Drag ended");
  };

  const renderGate = (gate) => {
    switch (gate.type) {
      case "AND":
        return <AndGate key={gate.id} />;
      //menee defaulttiin aina jostain syystä
      default:
        //console.log(gates);
        return <AndGate key={gate.id} />;
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="drawing-area">
        {(provided) => (
          <div
            className="drawing-area"
            onClick={handleClick}
            {...provided.droppableProps}
            ref={provided.innerRef}
            id="drawing-area"
          >
            {gates.map((gate, index) => (
              <Draggable
                key={gate.id}
                draggableId={gate.id}
                index={index}
                isDragDisabled={false}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                      position: "absolute",
                      left: gate.position?.x,
                      top: gate.position?.y,
                    }}
                  >
                    {renderGate(gate)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DrawingArea;
