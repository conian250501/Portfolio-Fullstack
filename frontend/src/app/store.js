import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSlice from "../features/profile/profileSlice";

const rootReducer = combineReducers({
  profile: profileSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
