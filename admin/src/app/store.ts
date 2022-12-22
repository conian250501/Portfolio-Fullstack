import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../featureds/Auth/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
