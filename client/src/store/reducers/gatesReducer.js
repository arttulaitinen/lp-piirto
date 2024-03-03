import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const gatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GATE':
      console.log(state)
      return [
        ...state,
        {
          id: uuidv4(), 
          gateType: action.payload.gateType,
          position: action.payload.position 
        }
      ];
    // laajenna 
    default:
      return state;
  }
};

export default gatesReducer;