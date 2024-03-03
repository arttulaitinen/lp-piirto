import { combineReducers } from '@reduxjs/toolkit';
import gatesReducer from './gatesReducer';
import cursorReducer from './cursorReducer';

const rootReducer = combineReducers({
  gates: gatesReducer,
  cursor: cursorReducer,
  //LISÄÄ MUUT REDUCERIT
});

export default rootReducer;