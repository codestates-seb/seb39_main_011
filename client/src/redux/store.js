import { createStore } from "redux";
import rootReducer from "./redux/reducers";
// toolkit 적용하기!

const store = createStore(rootReducer);

export default store;
