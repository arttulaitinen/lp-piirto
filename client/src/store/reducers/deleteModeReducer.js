const initialState = {
  isDeleteMode: false
};

const deleteModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DELETE_MODE":
      return { ...state, isDeleteMode: !state.isDeleteMode };
    default:
      return state;
  }
};

export default deleteModeReducer;
