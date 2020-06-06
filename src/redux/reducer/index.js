import { combineReducers } from "redux";
import ShoppingCartReducer from "./shoppingCart";
import BookListReducer from "./bookHub";

const rootReducer = combineReducers({ ShoppingCartReducer, BookListReducer });

export default rootReducer;
