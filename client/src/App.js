import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import logo from "./logo.svg";
import DrawingArea from "./components/DrawingArea";
import Toolbar from "./components/Toolbar";
import Login from "./components/utils/Login";
import "./App.css";

function App() {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  // Lisää login = reititys?

  return (
    <div className="app-container">
      <Toolbar isGridVisible={isGridVisible} toggleGrid={() => setIsGridVisible(!isGridVisible)} 
      isDeleteMode={isDeleteMode} toggleDeleteMode={() => setIsDeleteMode(!isDeleteMode)}
    />
      <DrawingArea isGridVisible={isGridVisible} 
      isDeleteMode={isDeleteMode}
    />
    </div>
  );
}

export default App;
