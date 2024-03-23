import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {
  gates: [],
  connections: [],
  isGridVisible: false,
  cursor: { x: 0, y: 0 },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
