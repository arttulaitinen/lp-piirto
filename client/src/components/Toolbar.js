import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//MUISTA IMPORTTAA LOPUT ACTIONIT
import {
  addConnection,
  deleteConnection,
} from "../store/actions/connectionsActions";
import { toggleConnectMode } from "../store/actions/connectionModeActions";
import { addGate, deleteGate, addInputGate, addOutputGate, addNotGate } from "../store/actions/gatesActions";
import { toggleGrid } from "../store/actions/gridActions";
import "./Toolbar.css";
import { SaveButton } from "./SaveButton";

export default function Toolbar({ ShowInfo, Save }) {
  const dispatch = useDispatch();

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
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a
            class="dropdown-item"
            onClick={() => {
              dispatch(addGate("AND", { x: 250, y: -350 }));
            }}
          >
            AND
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            onClick={() => {
              dispatch(addGate("OR", { x: 250, y: -350 }));
            }}
          >
            OR
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            onClick={() => {
              dispatch(addNotGate("NOT", { x: 250, y: -350 }));
            }}
          >
            NOT
          </a>
        </li>
        <li>
          <div class="dropdown-divider"></div>
        </li>
        <li>
          <a
            class="dropdown-item"
            onClick={() => {
              dispatch(addInputGate("INPUT", { x: 250, y: -350 }));
            }}
          >
            INPUT
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            onClick={() => {
              dispatch(addOutputGate("OUTPUT", { x: 250, y: -350 }));
            }}
          >
            OUTPUT
          </a>
        </li>
      </ul>

      <button
        type="button"
        className={`border btn btn-light mx-1`}
        onClick={() => dispatch(addConnection({ x: 400, y: 100 }, { x: 150, y: 150 }))}
      >
        Lisää yhteys
      </button>

      <button
        type="button"
        className={`border btn btn-light mx-1`}
        onClick={() => dispatch()}
      >
        Poista
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

      
    </div>
  );
}
