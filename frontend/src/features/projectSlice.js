import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HTTP_STATUS } from "../constansts/projectConstants";

export const fetchProjects = createAsyncThunk(
  `projects/fetchProjects`,
  async () => {
    const { data } = await axios.get("/api/v1/projects");
    return data.projects;
  }
);

let initialState = {
  loading: null,
  projects: null,
  featuredProjects: null,
  nonFeaturedProjects: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // getProjects: async (state) => {},
  },
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchProjects.fulfilled]: (state, actions) => {
      state.loading = HTTP_STATUS.FULFILLED;

      state.projects = actions.payload;

      const nonFeaturedProjects = actions.payload.filter((project) => {
        return project.featured === false;
      });
      state.nonFeaturedProjects = nonFeaturedProjects;

      const featuredProjects = [];
      state.projects.map((project) => {
        if (project.featured === true) {
          featuredProjects.push(project);
        }
      });
      state.featuredProjects = featuredProjects;
    },
    [fetchProjects.rejected]: (state) => {
      state.projects = HTTP_STATUS.REJECTED;
    },
  },
});

export const { getProjects } = projectSlice.actions;

// official documentation okkk hai.

// const fetchProjects = () => async (dispatch) => {
//   dispatch(usersLoading())
//   const response = await usersAPI.fetchAll()
//   dispatch(usersReceived(response.data))
// }

export default projectSlice.reducer;
