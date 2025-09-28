import { ADD_TO_CART, INCREMENT, REMOVE_FROM_CART } from "../actions";

const initialState = {
  createdAt: new Date().toISOString(),
  content: [],
  test: 0,
};

const cartReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter((_, index) => index !== action.payload),
      };
    case INCREMENT:
      return {
        ...state,
        test: state.test + action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
