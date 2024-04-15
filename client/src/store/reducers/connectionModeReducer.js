const initialState = {
  isConnectMode: false
};

const connectionModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CONNECT_MODE":
      if (state.isConnectMode) {
        return { isConnectMode: false };
      } else {
        return { isConnectMode: true };
      }
    default:
      return false;
  }
};

export default connectionModeReducer;
