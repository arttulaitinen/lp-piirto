import React from "react";
import { useSelector, useDispatch } from "react-redux";
//LISÄÄ LOPUT ACTIONIT
import { AddGate } from "../store/actions/gatesActions";
import "./Toolbar.css";

export default function Toolbar({ AddConnection, ShowInfo, ToggleGrid, Save }) {
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <button
        type="button"
        class="border btn btn-light"
        onClick={() => {
          //POISTA HARDKOODATUT KOORDINAATIT
          const position = { x: 150, y: 150 };
          console.log("AddGate payload:", { gateType: "AND", position });
          dispatch(AddGate("AND", position));
        }}
      >
        Portit
      </button>

      <button
        type="button"
        class="border btn btn-light mx-1"
        onClick={() => dispatch(AddConnection())}
      >
        Yhteys
      </button>

      <button
        type="button"
        class="border btn btn-light mx-1"
        onClick={() => dispatch(ShowInfo())}
      >
        Näytä tiedot
      </button>

      <button
        type="button"
        class="border btn btn-light mx-1"
        onClick={() => dispatch(ToggleGrid())}
      >
        Ruudukko
      </button>

      <button
        type="button"
        class="border btn btn-light mx-1"
        onClick={() => dispatch(Save())}
      >
        Tallenna ja poistu
      </button>
    </div>
  );
}
