import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiClient } from "~/api/apiClient";
import { PayloadUpdateProject, ProjectTypes } from "~/common/types";

const token = Cookies.get("access_token");
export const getAllProject = createAsyncThunk(
  "getAllProject",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get("api/v1/project/get_all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDetailProject = createAsyncThunk(
  "getDetailProject",
  async (id: string | number, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(`api/v1/project/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const createProject = createAsyncThunk(
  "createProject",
  async (payload: ProjectTypes, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("api/v1/project/create", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProject = createAsyncThunk(
  "updateProject",
  async (payload: PayloadUpdateProject, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.patch(
        `api/v1/project/update/${payload.id}`,
        payload.data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return payload;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "deleteProject",
  async (id: string | number, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.delete(`api/v1/project/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
