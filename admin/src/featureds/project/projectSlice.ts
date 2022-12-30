import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "~/app/store";
import {
  PayloadUpdateProject,
  ProjectTypes,
  TypeOfProject,
} from "~/common/types";
import {
  createProject,
  deleteProject,
  getAllProject,
  getDetailProject,
  updateProject,
} from "./projectActions";

interface StateTypes {
  loading: boolean;
  projects: ProjectTypes[];
  project: ProjectTypes;
  loadingDetail: boolean | null;
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
  project: {
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
  loadingDetail: null,
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

    // GET DETAIL
    builder.addCase(getDetailProject.pending, (state) => {
      state.loadingDetail = true;
    });
    builder.addCase(
      getDetailProject.fulfilled,
      (state, action: PayloadAction<ProjectTypes>) => {
        state.loadingDetail = false;
        state.project = action.payload;
      }
    );
    builder.addCase(getDetailProject.rejected, (state) => {
      state.loadingDetail = true;
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

    // UPDATE
    builder.addCase(updateProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      updateProject.fulfilled,
      (state, action: PayloadAction<PayloadUpdateProject>) => {
        state.loading = false;
        state.projects = state.projects.map((project: any) =>
          project._id === action.payload.id
            ? {
                ...project,
                image: action.payload.data.image,
                name: action.payload.data.name,
                description: action.payload.data.description,
                type: { ...project.type, name: action.payload.data.type },
              }
            : { ...project }
        );
      }
    );
    builder.addCase(updateProject.rejected, (state) => {
      state.loading = true;
    });

    // DELETE
    builder.addCase(deleteProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteProject.fulfilled,
      (state, action: PayloadAction<string | number>) => {
        state.loading = false;
        state.projects = state.projects.filter(
          (project) => project._id !== action.payload
        );
      }
    );
    builder.addCase(deleteProject.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const selectLoadingProject = (state: RootState) => state.project.loading;
export const selectAllProject = (state: RootState) => state.project.projects;
export const selectProject = (state: RootState) => state.project.project;
export default projectSlice.reducer;
