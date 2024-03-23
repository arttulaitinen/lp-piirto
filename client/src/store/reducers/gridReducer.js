const initialState = {
  isGridVisible: false,
};

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_GRID":
      return {
        ...state,
        isGridVisible: !state.isGridVisible,
      };
    default:
      return state;
  }
};

export default gridReducer;
