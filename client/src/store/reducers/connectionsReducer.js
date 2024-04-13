const initialState = {
  connections: []
};

const connectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONNECTION":
      return [
        ...state,
        {
          fromGateId: action.payload.fromGateId,
          toGateId: action.payload.toGateId,
          startPos: action.payload.startPos,
          endPos: action.payload.endPos,
        },
      ];
    case "DELETE_CONNECTION":
      return;
    default:
      return state;
  }
};

export default connectionsReducer;
