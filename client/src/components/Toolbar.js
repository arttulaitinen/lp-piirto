import React from "react";
import { useSelector, useDispatch } from "react-redux";
//LISÄÄ LOPUT ACTIONIT
import { AddGate } from "../store/actions/gatesActions";
import { setCursorPosition } from "../store/actions/cursorActions";

export default function Toolbar({ AddConnection, ShowInfo, ToggleGrid, Save }) {
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <button
        onClick={() => {
          //POISTA HARDKOODATUT KOORDINAATIT
          const position = { x: 150, y: 150 };
          console.log("AddGate payload:", { gateType: "AND", position });
          dispatch(AddGate("AND", position ));
        }}
      >
        Portit
      </button>

      <button onClick={() => dispatch(AddConnection())}>Yhteys</button>

      <button onClick={() => dispatch(ShowInfo())}>Näytä tiedot</button>

      <button onClick={() => dispatch(ToggleGrid())}>Ruudukko</button>

      <button onClick={() => dispatch(Save())}>Tallenna ja poistu</button>
    </div>
  );
}
