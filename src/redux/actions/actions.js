import { ADD_TO_CART } from "./actionTypes";

export const addToCart = (content) => ({
  type: ADD_TO_CART,
  payload: {
    id: content,
    content,
  },
});
