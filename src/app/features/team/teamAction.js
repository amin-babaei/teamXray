import {
  createAsyncThunk
} from "@reduxjs/toolkit"
import {
  deletePlayer,
  deleteTeam,
  getAllTeams,
  getTeam,
  newTeam,
  newplayer
} from '../../../services/team';

export const fetchTeams = createAsyncThunk(
  'fetch/teams', async () => {
    try {
      const { data } = await getAllTeams();
      return data
    } catch (error) {
      console.log(error)
    }
  }
)
export const fetchTeam = createAsyncThunk(
  'fetch/team', async (title) => {
    try {
      const { data } = await getTeam(title);
      return data
    } catch (error) {
      console.log(error)
    }
  }
)
export const removedTeam = createAsyncThunk(
  "/teams/deleteTeam",
  async (teamId) => {
    await deleteTeam(teamId);
    return teamId;
  }
);
export const addNewTeam = createAsyncThunk(
  "/teams/addNewTeam",
  async (team) => {
    const { data } = await newTeam(team);
    return data;
  }
);
export const removedPlayer = createAsyncThunk(
  "/teams/deletePlayer",
  async (params) => {
    const { teamId, playerId } = params
    await deletePlayer(teamId, playerId)
  }
);
export const addNewPlayer = createAsyncThunk(
  "/teams/addNewPlayer",
  async (params) => {
    const { teamId, player } = params
    const { data } = await newplayer(teamId, player)
    return data
  }
)