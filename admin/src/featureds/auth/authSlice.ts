import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../../app/store";
import { UserTypes } from "../../common/types";
import {
  checkLoginAsync,
  loginAsync,
  logoutAsync,
  registerAsync,
} from "./authActions";

interface StateTypes {
  loading: boolean;
  user: UserTypes | null;
  isAuthenticated: boolean | null;
}
const initialState: StateTypes = {
  loading: true,
  user: null,
  isAuthenticated: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // REGISTER
    builder.addCase(registerAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      registerAsync.fulfilled,
      (state, action: PayloadAction<UserTypes>) => {
        state.loading = false;
        state.user = action.payload;
        toast(`${action.payload.message}`);
      }
    );
    builder.addCase(
      registerAsync.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.user = null;
        toast(`${action.payload.message}`);
      }
    );

    // LOGIN
    builder.addCase(loginAsync.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(
      loginAsync.fulfilled,
      (state, action: PayloadAction<UserTypes>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        Cookies.set("access_token", action.payload.token);
      }
    );
    builder.addCase(
      loginAsync.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.user = null;
        toast(`${action.payload.message}`);
      }
    );

    // CHECK LOGIN
    builder.addCase(checkLoginAsync.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(
      checkLoginAsync.fulfilled,
      (state, action: PayloadAction<UserTypes>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      }
    );
    builder.addCase(
      checkLoginAsync.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.user = null;
        // toast(`${action.payload.message}`);
      }
    );

    // LOGOUT
    builder.addCase(logoutAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      logoutAsync.fulfilled,
      (state, action: PayloadAction<UserTypes>) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        Cookies.remove("access_token");
      }
    );
    builder.addCase(
      logoutAsync.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = true;
        toast(`${action.payload.message}`);
      }
    );
  },
});

export const getIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const getUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
