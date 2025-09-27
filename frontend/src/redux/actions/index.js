export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCartAction = (productSelected) => {
  return { type: ADD_TO_CART, payload: productSelected };
};

export const removeFromCart = (index) => {
  return { type: REMOVE_FROM_CART, payload: index };
};

// export const SELECT_BOOK = "SELECT_BOOK";
// export const SET_USER = "SET_USER";
// export const SET_BOOKS = "SET_BOOKS";
// export const SET_BOOKS_LOADING_ON = "SET_BOOKS_LOADING_ON";
// export const SET_BOOKS_LOADING_OFF = "SET_BOOKS_LOADING_OFF";
// export const HAS_ERROR_ON = "HAS_ERROR_ON";
// export const HAS_ERROR_OFF = "HAS_ERROR_OFF";
// export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const addToCartActionThunk = (productToInsert) => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log(currentState);

    // const userName = currentState.user.content;

    const foundProduct = currentState.cart.content.find((currentProduct) => currentProduct.id === productToInsert.id);

    if (!foundProduct) {
      dispatch({ type: ADD_TO_CART, payload: productToInsert });
    } else {
    //   if (userName) {
    //     alert(`${userName}, non ti ricordi di aver già inserito ${bookToInsert.title}?`);
    //   } else {
        alert(`product already in cart`);
      }
    }
  };
};

// export const setUserAction = (str) => ({ type: SET_USER, payload: str });
// export const selectBookAction = (book) => ({ type: SELECT_BOOK, payload: book });

// grazie a redux-thunk, già integrato come middleware dal nostro configureStrore() di @reduxjs/toolkit,
// abbiamo la possibilità, da subito, di poter creare degli action creator che invece di ritornare subito un oggetto,
// possano fare operazioni intermedie, ANCHE ASINCRONE!!!

// export const getBooksAction = (endpoint) => {
//   // questo action creator ritorna una funzione invece di un oggetto di action
//   return async (dispatch, getState) => {
//     // qui dentro possiamo gestire logica (condizionale e non) anche asincrona

//     // possiamo leggere lo stato globale nel momento in cui si avvia questo action creator, ed eventualmente
//     // reagire condizionalmente a dei valori presenti nello stato in quel momento
//     const globalState = getState(); // la chiamata di getState mi torna l'intero stato globale che posso leggere e trattare come oggetto
//     console.log("global State", globalState);

//     // essendo noi inseriti in dinamiche redux possiamo lanciare più dispatch da un singolo action creator
//     // stiamo gestendo stati di caricamento ed errori che poi potremo leggere da qualunque punto dell'applicazione
//     // per poter far comparire spinner o alert di errore dove vogliamo (anche più di uno per lo stesso dato di stato)
//     dispatch({ type: SET_BOOKS_LOADING_ON });
//     try {
//       let resp = await fetch(endpoint);
//       if (resp.ok) {
//         let fetchedBooks = await resp.json();
//         dispatch({ type: SET_BOOKS, payload: fetchedBooks });
//       } else {
//         console.log("error");
//         throw new Error("Problema nella fetch");
//       }
//     } catch (error) {
//       console.log(error);

//       dispatch({ type: HAS_ERROR_ON });
//       dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
//     } finally {
//       dispatch({ type: SET_BOOKS_LOADING_OFF });
//     }
//   };
// };
