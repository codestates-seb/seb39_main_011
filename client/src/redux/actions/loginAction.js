export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESSS";

export const loginSuccess = (id) => ({
  type: LOGIN_SUCCESS,
  payload: false,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
