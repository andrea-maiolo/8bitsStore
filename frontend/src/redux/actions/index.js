export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT = "INCREMENT";

export const addToCartAction = (productSelected) => {
  return { type: ADD_TO_CART, payload: productSelected };
};

export const removeFromCart = (index) => {
  return { type: REMOVE_FROM_CART, payload: index };
};

export const incrementTest = (amount) => {
  return { type: INCREMENT, payload: amount };
};

// this is how to do a fetch from multiple components
export const addToCartActionThunk = (productToInsert) => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log(currentState);

    const foundProduct = currentState.cart.content.find((currentProduct) => currentProduct.id === productToInsert.id);

    if (!foundProduct) {
      dispatch({ type: ADD_TO_CART, payload: productToInsert });
    } else {
      alert(`product already in cart`);
    }
  };
};
