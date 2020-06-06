import { ADD_TO_CART, BUY_NOW, RESET_CART, SAVE_BOOKS } from "./actionTypes";

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

export const ResetCart = () => ({
  type: RESET_CART,
});

export const SaveBookList = (content) => ({
  type: SAVE_BOOKS,
  payload: {
    content,
  },
});
