const initialState = {
  isConnectMode: false
};

const connectionModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CONNECT_MODE":
      return { ...state, isConnectMode: !state.isConnectMode };
    default:
      return state;
  }
};

export default connectionModeReducer;
