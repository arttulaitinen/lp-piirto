export const setUserState = (userState) => {
  return {
    type: "SET_USER_STATE",
    payload: userState,
  };
};
