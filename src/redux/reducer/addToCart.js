import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = {
  allBookIds: [],
  quantity: 0,
};

const addToCartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, content } = action.payload;
      return {
        ...state,
        allBookIds: [...state.allBookIds, id],
        quantity: state.quantity + 1,
      };
    }
    default:
      return state;
  }
};
export default addToCartReducer;
