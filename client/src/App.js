import React from "react";
import logo from "./logo.svg";
import DrawingArea from './components/DrawingArea';
import Toolbar from './components/Toolbar';
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Toolbar />
      <DrawingArea />
    </div>
  );
}

export default App;
