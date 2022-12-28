import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectReducer from "~/featureds/project/projectSlice";
import authReducer from "../featureds/Auth/authSlice";
import sidebarReducer from "../featureds/Header/sidebarSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  project: projectReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
