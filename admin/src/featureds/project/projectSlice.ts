import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "~/app/store";
import { ProjectTypes, TypeOfProject } from "~/common/types";
import { createProject, getAllProject } from "./projectActions";

interface StateTypes {
  loading: boolean;
  projects: ProjectTypes[];
  project: ProjectTypes | null;
}

const initialState: StateTypes = {
  loading: true,
  projects: [
    {
      _id: "",
      image: "",
      name: "",
      description: "",
      type: { _id: "", name: "", createdAt: "", updatedAt: "" },
      links: [],
      technologicals: [],
      createdAt: "",
      updatedAt: "",
    },
  ],
  project: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL
    builder.addCase(getAllProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllProject.fulfilled,
      (state, action: PayloadAction<ProjectTypes[]>) => {
        state.loading = false;
        state.projects = action.payload;
      }
    );
    builder.addCase(getAllProject.rejected, (state) => {
      state.loading = true;
    });

    // CREATE
    builder.addCase(createProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createProject.fulfilled,
      (state, action: PayloadAction<ProjectTypes>) => {
        toast("Create successfully");
        state.loading = false;
        state.projects.push(action.payload);
      }
    );
    builder.addCase(createProject.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const selectLoadingProject = (state: RootState) => state.project.loading;
export const selectAllProject = (state: RootState) => state.project.projects;
export const selectProject = (state: RootState) => state.project.project;
export default projectSlice.reducer;
