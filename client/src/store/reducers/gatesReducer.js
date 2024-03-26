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
  return state.map((gate) => {
    if (gate.id === action.payload.id) {
      return { ...gate, position: action.payload.position };
    } else {
      return gate; 
    }
  });
    // laajenna
    default:
      return state;
  }
};

export default gatesReducer;
