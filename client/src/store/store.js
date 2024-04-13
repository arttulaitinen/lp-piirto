import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {
  gates: [{ id: "4bf29e2c-1879-4ece-a798-e39c5376f095", gateType: "OR", position: { x: 180, y: 500 }}],
  connections: [{ startPos: { x: 180, y: 500 }, endPos: { x: 200, y: 550 }}],
  isConnectMode: false,
  isGridVisible: false,
  hoveredElement: null,
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
