import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiClient } from "~/api/apiClient";
import { TypeOfProject } from "~/common/types";

const token = Cookies.get("access_token");

export const getAllTypeProject = createAsyncThunk(
  "getAllTypeProject",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get("/api/v1/types_project/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getTypeProject = createAsyncThunk(
  "getTypeProject",
  async (id: string | number) => {
    try {
      const { data } = await apiClient.get(`/api/v1/types_project/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data.data;
    } catch (error) {
      return error;
    }
  }
);

export const createTypeProject = createAsyncThunk(
  "createTypeProject",
  async (payload: TypeOfProject, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post(
        "/api/v1/types_project/create",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTypeProject = createAsyncThunk(
  "updateTypeProject",
  async (payload: TypeOfProject, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.patch(
        `api/v1/types_project/update/${payload._id}`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
      return payload;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteTypeProject = createAsyncThunk(
  "deleteTypeProject",
  async (id: string | number, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.delete(
        `/api/v1/types_project/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
      return { id };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
