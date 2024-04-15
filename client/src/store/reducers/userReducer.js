// Reducer käyttäjän tilan hallintaan

const initialState = {
  userState: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_STATE":
      return {
        ...state,
        userState: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
