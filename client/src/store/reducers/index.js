import { combineReducers } from '@reduxjs/toolkit';
import gatesReducer from './gatesReducer';
import cursorReducer from './cursorReducer';
import gridReducer from './gridReducer';

const rootReducer = combineReducers({
  gates: gatesReducer,
  cursor: cursorReducer,
  isGridVisible: gridReducer,
});

export default rootReducer;