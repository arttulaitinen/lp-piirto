import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {
  gates: [
    {
      id: "291e9f86-3141-43af-9314-942cc95602a1",
      gateType: "AND",
      position: { x: 348, y: 415 },
    },
  ],
  connections: [],
  isConnectMode: false,
  isGridVisible: false,
  cursor: { x: 0, y: 0 },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
