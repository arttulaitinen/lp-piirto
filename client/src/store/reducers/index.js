import { combineReducers } from '@reduxjs/toolkit';
import gatesReducer from './gatesReducer';
import cursorReducer from './cursorReducer';
import gridReducer from './gridReducer';
import connectionsReducer from './connectionsReducer';
import connectionModeReducer from './connectionModeReducer';

const rootReducer = combineReducers({
  gates: gatesReducer,
  cursor: cursorReducer,
  connections: connectionsReducer,
  isConnectMode: connectionModeReducer,
  isGridVisible: gridReducer,
});

export default rootReducer;