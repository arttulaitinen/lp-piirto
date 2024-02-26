import { combineReducers } from '@reduxjs/toolkit';
import gatesReducer from './gatesReducer';

const rootReducer = combineReducers({
  gates: gatesReducer,
  //LISÄÄ MUUT REDUCERIT
});

export default rootReducer;