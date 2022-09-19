// 여러 리듀서들을 묶어주는 js파일
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
