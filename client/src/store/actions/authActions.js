export const loginSuccess = (user) => ({
  type: "LOGIN",
  payload: { user },
});

export const logout = () => ({
  type: "LOGOUT",
});
