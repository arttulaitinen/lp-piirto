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
          input: null,
          output1: null,
          output2: null,
        },
      ];
    case "ADD_INPUTGATE":
      return [
        ...state,
        {
          id: uuidv4(),
          gateType: action.payload.gateType,
          position: action.payload.position,
          output: true,
        },
      ];  
    case "ADD_OUTPUTGATE":
      return [
        ...state,
        {
          id: uuidv4(),
          gateType: action.payload.gateType,
          position: action.payload.position,
          input: false,
        },
      ];      
    case "ADD_NOTGATE":
      return [
        ...state,
        {
          id: uuidv4(),
          gateType: action.payload.gateType,
          position: action.payload.position,
          input: false,
          output: true,
        },
      ];     
      case "CHANGE_STATUS":
        return state.map(gate => {
            if (gate.id === action.payload.id && gate.gateType === "INPUT") {
               return { ...gate, output: !gate.output };
            } else {
              return gate; 
            }
          });
    case "UPDATE_GATE_POSITION":
      return state.map((gate) => {
        if (gate.id === action.payload.id) {
          return { ...gate, position: action.payload.position };
        } else {
          return gate; 
        }
      });
    case "DELETE_GATE":
      return state.filter((gate) => gate.id !== action.payload.id);
    default:
      return state;
  }
};

export default gatesReducer;
