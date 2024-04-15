import { combineReducers } from "@reduxjs/toolkit";
import gatesReducer from "./gatesReducer";
import cursorReducer from "./cursorReducer";
import gridReducer from "./gridReducer";
import connectionsReducer from "./connectionsReducer";
import connectionModeReducer from "./connectionModeReducer";
import deleteModeReducer from "./deleteModeReducer";

const rootReducer = combineReducers({
  gates: gatesReducer,
  connections: connectionsReducer,
  isConnectMode: connectionModeReducer,
  isDeleteMode: deleteModeReducer,
  isGridVisible: gridReducer,
  hoveredElement: cursorReducer,
  user: userReducer,
});

export default rootReducer;
