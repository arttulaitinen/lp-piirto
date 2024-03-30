import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//MUISTA IMPORTTAA LOPUT ACTIONIT
import {
  addConnection,
  deleteConnection,
} from "../store/actions/connectionsActions";
import { toggleConnectMode } from "../store/actions/connectionModeActions";
import { addGate, deleteGate } from "../store/actions/gatesActions";
import { toggleGrid } from "../store/actions/gridActions";
import "./Toolbar.css";

export default function Toolbar({ ShowInfo, Save }) {
  const dispatch = useDispatch();
  const isConnectMode = useSelector((state) => state.isConnectMode);

  return (
    <div className="toolbar">
      <button
        type="button"
        class="border btn btn-light dropdown-toggle"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Portit
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a
          class="dropdown-item"
          onClick={() => {
            dispatch(addGate("AND", { x: 0, y: 0 }));
          }}
        >
          AND
        </a>
        <a
          class="dropdown-item"
          onClick={() => {
            dispatch(addGate("OR", { x: 0, y: 0 }));
          }}
        >
          OR
        </a>
        <a
          class="dropdown-item"
          onClick={() => {
            dispatch(addGate("NOT", { x: 0, y: 0 }));
          }}
        >
          NOT
        </a>
        <a
          class="dropdown-item"
          onClick={() => {
            dispatch(addGate("NAND", { x: 0, y: 0 }));
          }}
        >
          NAND
        </a>
        <a
          class="dropdown-item"
          onClick={() => {
            dispatch(addGate("NOR", { x: 0, y: 0 }));
          }}
        >
          NOR
        </a>
        <a
          class="dropdown-item"
          onClick={() => {
            dispatch(addGate("XOR", { x: 0, y: 0 }));
          }}
        >
          XOR
        </a>
        <a
          class="dropdown-item"
          onClick={() => {
            dispatch(addGate("XNOR", { x: 0, y: 0 }));
          }}
        >
          XNOR
        </a>
      </div>

      <button
        type="button"
        className={`border btn btn-light mx-1`}
        onClick={() => dispatch(toggleConnectMode())}
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
        onClick={() => dispatch(toggleGrid())}
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
