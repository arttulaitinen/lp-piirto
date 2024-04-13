import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import logo from "./logo.svg";
import DrawingArea from "./components/DrawingArea";
import Toolbar from "./components/Toolbar";
import Login from "./components/utils/Login";
import "./App.css";

function App() {
  // Lisää login = reititys?

  return (
    <div className="app-container">
      <Toolbar />
      <DrawingArea />
    </div>
  );
}

export default App;
