import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/loginAction";

const initialState = {
  isLogin: false,
  id: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // 객체로 내보내주기
      return {
        isLogin: true,
        id: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        isLogin: false,
        id: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
