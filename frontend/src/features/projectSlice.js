import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    getProjects: async (state) => {
      try {
        const { data } = await axios.get("/api/v1/projects");
        const projects = data.projects;
        console.log(projects);
        state.projects.push(projects);
      } catch (error) {
        console.log("BACKEND", error);
      }
    },
  },
});

export const { getProjects } = projectSlice.actions;

// official documentation okkk hai

// const fetchProjects = () => async (dispatch) => {
//   dispatch(usersLoading())
//   const response = await usersAPI.fetchAll()
//   dispatch(usersReceived(response.data))
// }

export default projectSlice.reducer;
