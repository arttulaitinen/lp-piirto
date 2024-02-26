import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {
  gates: [],
  connections: [],
  isGridVisible: false,
  };

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
