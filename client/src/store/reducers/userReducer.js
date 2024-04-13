// Reducer käyttäjän tilan hallintaan

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_STATE":
      return { ...state, ...action.payload };
  }
};

export default userReducer;
