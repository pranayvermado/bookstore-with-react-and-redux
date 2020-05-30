import { combineReducers } from "redux";
import ShoppingCartReducer from "./shoppingCart";

const rootReducer = combineReducers({ ShoppingCartReducer });

export default rootReducer;
