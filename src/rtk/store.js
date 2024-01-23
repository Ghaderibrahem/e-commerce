import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import products from "./products";

const store = configureStore({
  reducer: combineReducers({products}),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

setupListeners(store.dispatch);

export { store };
 
