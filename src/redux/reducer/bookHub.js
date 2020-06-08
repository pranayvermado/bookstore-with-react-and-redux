import { SAVE_BOOKS } from "../actions/actionTypes";

const initialState = {
  books: [],
};

const BookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BOOKS: {
      const { content } = action.payload;
      return {
        ...state,
        books: content,
      };
    }
    default:
      return state;
  }
};
export default BookListReducer;
