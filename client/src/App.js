import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import logo from "./logo.svg";
import DrawingArea from "./components/DrawingArea";
import Toolbar from "./components/Toolbar";
import Login from "./components/utils/Login";
import "./App.css";

function App() {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isConnectMode, setIsConnectMode] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="app">
      {isLoggedIn ? (
        <div className="app-container">
          <Toolbar
            isGridVisible={isGridVisible}
            toggleGrid={() => setIsGridVisible(!isGridVisible)}
            isDeleteMode={isDeleteMode}
            toggleDeleteMode={() => setIsDeleteMode(!isDeleteMode)}
            isConnectMode={isConnectMode}
          />
          <DrawingArea
            isGridVisible={isGridVisible}
            isDeleteMode={isDeleteMode}
            isConnectMode={isConnectMode}
            toggleConnectMode={() => setIsConnectMode(!isConnectMode)}
          />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
