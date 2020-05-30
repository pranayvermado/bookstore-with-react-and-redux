import { ADD_TO_CART, BUY_NOW } from "./actionTypes";

export const AddToCart = (content) => ({
  type: ADD_TO_CART,
  payload: {
    id: content,
    content,
  },
});

export const BuyNow = (content) => ({
  type: BUY_NOW,
  payload: {
    id: content,
    content,
  },
});
