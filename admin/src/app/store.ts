import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../featureds/Auth/authSlice";
import sidebarReducer from "../featureds/Header/sidebarSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
