import { configureStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "./app/localStorageMiddleware.js";
import debtbooksReducer from "./slices/debtbooksSlice.js";
import activeDebtbookReducer from "./slices/activeDebtbookSlice.js";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    debtbooks: debtbooksReducer,
    activeDebtbook: activeDebtbookReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveState),
});
