import { combineReducers } from "redux";
import { cartReducers } from "./cartReducers";
import { counterReducer } from "./counterReducers";

export const rootReducer = combineReducers({
    counter: counterReducer,
    addToCart: cartReducers
})