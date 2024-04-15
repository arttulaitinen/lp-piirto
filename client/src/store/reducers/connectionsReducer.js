const initialState = {
  connections: []
};

const connectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONNECTION":
      return [
        ...state,
        {
        },
      ];
    case "UPDATE_GATE_POSITION":
      return state.map((connection) => {
        if (connection.id === action.payload.id) {
          return { ...connection, start: action.payload.start, end: action.payload.end };
        } else {
          return connection; 
        }
      });
    case "DELETE_CONNECTION":
      return;
    default:
      return state;
  }
};

export default connectionsReducer;
