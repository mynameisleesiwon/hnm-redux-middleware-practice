// reducer 합치기
import { combineReducers } from "redux";
import authentiateReducer from "./authentiateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authentiateReducer,
  product: productReducer,
});
