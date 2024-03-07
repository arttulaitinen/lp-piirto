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
            //POISTA HARDKOODATUT KOORDINAATIT
            const position = { x: 425, y: 405 };
            dispatch(AddGate("AND", position));
          }}
        >
          AND
        </a>
        <a class="dropdown-item">OR</a>
        <a class="dropdown-item">NOT</a>
        <a class="dropdown-item">NAND</a>
        <a class="dropdown-item">NOR</a>
        <a class="dropdown-item">XOR</a>
        <a class="dropdown-item">XNOR</a>
      </div>

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
