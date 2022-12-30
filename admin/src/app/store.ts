import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectReducer from "~/featureds/project/projectSlice";
import typeProjectReducer from "~/featureds/typeProject/typeProjectSlice";
import authReducer from "../featureds/auth/authSlice";
import sidebarReducer from "../featureds/header/sidebarSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  project: projectReducer,
  typeProject: typeProjectReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
