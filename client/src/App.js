import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import logo from "./logo.svg";
import DrawingArea from "./components/DrawingArea";
import Toolbar from "./components/Toolbar";
import Login from "./components/utils/Login";
import "./App.css";

function App() {
  // Login
  //const [user, setUser] = useState(null);
  //const [isLogin, setIsLogin] = useState(false);
  //const handleLogin = (user) => {
  //  setUser(user);
  //  setIsLogin(true);
  //}
  return (
    <div className="app-container">
      <Toolbar />
      <DrawingArea />
    </div>
  );
}

export default App;
