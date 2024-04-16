import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {
  gates: [],
  connections: [],
  isConnectMode: false,
  isDeleteMode: false,
  isGridVisible: false,
  hoveredElement: null,
  user: [],
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
