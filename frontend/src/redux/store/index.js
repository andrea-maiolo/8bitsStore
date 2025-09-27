// 1) crea lo store con il configureStore
// 2) crea un reducer con un primo case e un default case e applicagli lo stato iniziale (per il primo avvio)
// 3) collega lo store all'App React tramite il <Provider> e la prop store in main.jsx
// 4) a questo punto sei pronto per usare l'hook useDispatch per ricavare al funzione dispatch() ed
//    eseguirla inserendo un'oggetto action come argomento
// 5) potrai leggere da qualsiasi punto dell'applicazione il dato (che cambia nel tempo) tramite l'hook useSelector

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "../reducers/cartReducer";
//all other reduxers
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_PERSIST_KEY,
    }),
  ],
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
