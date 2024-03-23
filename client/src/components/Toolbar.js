import React from "react";
import { useSelector, useDispatch } from "react-redux";
//LISÄÄ LOPUT ACTIONIT
import { AddGate } from "../store/actions/gatesActions";
import { toggleGrid } from "../store/actions/gridActions";
import "./Toolbar.css";

export default function Toolbar({ AddConnection, ShowInfo, Save }) {
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
          onClick={() => {const position = { x: 425, y: 405 }; dispatch(AddGate("AND", position)); }}
        >
          AND
        </a>
        <a class="dropdown-item"
        onClick={() => {const position = { x: 425, y: 405 }; dispatch(AddGate("OR", position)); }}
        >OR</a>
        <a class="dropdown-item"
        onClick={() => {const position = { x: 425, y: 405 }; dispatch(AddGate("NOT", position)); }}
        >NOT</a>
        <a class="dropdown-item"
        onClick={() => {const position = { x: 425, y: 405 }; dispatch(AddGate("NAND", position)); }}
        >NAND</a>
        <a class="dropdown-item"
        onClick={() => {const position = { x: 425, y: 405 }; dispatch(AddGate("NOR", position)); }}
        >NOR</a>
        <a class="dropdown-item"
        onClick={() => {const position = { x: 425, y: 405 }; dispatch(AddGate("XOR", position)); }}
        >XOR</a>
        <a class="dropdown-item"
        onClick={() => {const position = { x: 425, y: 405 }; dispatch(AddGate("XNOR", position)); }}
        >XNOR</a>
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
