import { v4 as uuidv4 } from "uuid";

const initialState = {
  gates: []
};

const gatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_GATE":
      return [
        ...state,
        {
          id: uuidv4(),
          gateType: action.payload.gateType,
          position: action.payload.position,
        },
      ];
    case "UPDATE_GATE_POSITION":
      const { gateId, position } = action.payload;
      return {
        ...state,
        gates: state.gates.map((gate) =>
          gate.id === gateId ? { ...gate, position } : gate
        ),
      };
    // laajenna
    default:
      return state;
  }
};

export default gatesReducer;
