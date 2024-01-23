import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: combineReducers({}),
});

setupListeners(store.dispatch);

export { store };

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
