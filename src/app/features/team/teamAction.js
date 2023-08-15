import {
  createAsyncThunk
} from "@reduxjs/toolkit"
import {
  deleteTeam,
  editTeam,
  getAllTeams,
  getTeam,
  newTeam,
} from '../../../services/team';
import { toastError } from "../../../helpers/Toast";

export const fetchTeams = createAsyncThunk(
  'fetch/teams', async () => {
    try {
      const { data } = await getAllTeams();
      return data
    } catch (error) {
      toastError(error?.response?.data?.message)
    }
  }
)
export const fetchTeam = createAsyncThunk(
  'fetch/team', async (title) => {
    try {
      const { data } = await getTeam(title);
      return data
    } catch (error) {
      toastError(error?.response?.data?.message)
    }
  }
)
export const removedTeam = createAsyncThunk(
  "/teams/deleteTeam",
  async (teamId) => {
    try {
      await deleteTeam(teamId);
    } catch (error) {
      toastError(error?.response?.data?.message)
    }
  }
);
export const addNewTeam = createAsyncThunk(
  '/teams/addNewTeam',
   async (team, { rejectWithValue }) => {
    try {
      const response = await newTeam(team);
      return response.data;
    } catch (error) {
      toastError(error?.response?.data?.error || error?.response?.data?.message)
    return rejectWithValue(error?.response?.data?.error || error?.response?.data?.message);
  }
});
export const updateTeam = createAsyncThunk(
  '/teams/updateTeam',
   async ({ id, team }, { rejectWithValue }) => {
    try {
      const response = await editTeam(id, team);
      return response.data;
    } catch (error) {
      toastError(error?.response?.data?.error || error?.response?.data?.message)
      return rejectWithValue(error?.response?.data?.error || error?.response?.data?.message);
  }
});