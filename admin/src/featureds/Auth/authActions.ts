import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiClient } from "../../api/apiClient";
import { LoginTypes, RegisterTypes } from "../../common/types";

export const registerAsync = createAsyncThunk(
  "registerAsync",
  async (payload: RegisterTypes, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("/api/v1/register", payload);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "loginAsync",
  async (payload: LoginTypes, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("/api/v1/login", payload);
      return data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const checkLoginAsync = createAsyncThunk(
  "checkLoginAsync",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("access_token");
      const { data } = await apiClient.get("/api/v1/logged_in", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "logoutAsync",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("access_token");
      const { data } = await apiClient.get("/api/v1/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
