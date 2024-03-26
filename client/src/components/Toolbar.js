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
          onClick={() => {dispatch(AddGate("AND", { x: 0, y: 0 })); }}
        >
          AND
        </a>
        <a class="dropdown-item"
        onClick={() => {dispatch(AddGate("OR", { x: 0, y: 0 })); }}
        >OR</a>
        <a class="dropdown-item"
        onClick={() => {dispatch(AddGate("NOT", { x: 0, y: 0 })); }}
        >NOT</a>
        <a class="dropdown-item"
        onClick={() => {dispatch(AddGate("NAND", { x: 0, y: 0 })); }}
        >NAND</a>
        <a class="dropdown-item"
        onClick={() => {dispatch(AddGate("NOR", { x: 0, y: 0 })); }}
        >NOR</a>
        <a class="dropdown-item"
        onClick={() => {dispatch(AddGate("XOR", { x: 0, y: 0 })); }}
        >XOR</a>
        <a class="dropdown-item"
        onClick={() => {dispatch(AddGate("XNOR", { x: 0, y: 0 })); }}
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
