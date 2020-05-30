import { ADD_TO_CART, BUY_NOW } from "../actions/actionTypes";

const initialState = {
  bookId: 0,
  quantity: 0,
  allBookIds: [],
};

const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, content } = action.payload;
      return {
        ...state,
        allBookIds: [...state.allBookIds, id],
        quantity: state.quantity + 1,
        bookId: 0,
      };
    }
    case BUY_NOW: {
      const { id, content } = action.payload;
      return {
        ...state,
        allBookIds: [...state.allBookIds, id],
        quantity: 1,
        bookId: id,
      };
    }
    default:
      return state;
  }
};
export default ShoppingCartReducer;
