import { ADD_TO_CART, BUY_NOW, RESET_CART } from "../actions/actionTypes";

const initialState = {
  bookId: 0,
  quantity: 0,
  allBookIds: [],
};

const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action.payload;
      return {
        ...state,
        allBookIds: [...state.allBookIds, id],
        quantity: state.quantity + 1,
        bookId: 0,
      };
    }
    case BUY_NOW: {
      const { id } = action.payload.id;
      return {
        ...state,
        allBookIds: [...state.allBookIds, id],
        quantity: 1,
        bookId: id,
      };
    }
    case RESET_CART: {
      return {
        ...state,
        allBookIds: [],
        quantity: 0,
        bookId: 0,
      };
    }
    default:
      return state;
  }
};
export default ShoppingCartReducer;
