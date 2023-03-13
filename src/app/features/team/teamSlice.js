import { createSlice } from '@reduxjs/toolkit'
import { addNewPlayer, addNewTeam, fetchTeam, fetchTeams, removedPlayer, removedTeam } from './teamAction';

const initialState = {
  teamList: [],
  team: [],
  loading: false,
  error: null,
}

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  extraReducers: {
    [fetchTeams.fulfilled]: (state, action) => {
      state.teamList = action.payload
      state.loading = false
    },
    [fetchTeams.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchTeams.rejected]: (state,action) => {
      state.loading = false
      state.error = action.error.message
    },
    [fetchTeam.fulfilled]: (state, action) => {
      state.team = action.payload
      state.loading = false
    },
    [fetchTeam.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchTeam.rejected]: (state,action) => {
      state.loading = false
      state.error = action.error.message
    },
    [removedTeam.fulfilled]: (state, action) => {
      state.teamList.Teams = state.teamList.Teams.filter(
        (team) => team._id !== action.payload
      );
      state.loading = false
    },
    [removedTeam.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [removedTeam.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [addNewTeam.fulfilled]: (state, action) => {
      state.teamList.Teams.push(action.payload.team);
      state.loading = false
    },
    [addNewTeam.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [addNewTeam.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [removedPlayer.fulfilled]: (state, action) => {
      state.team = state.team.team[0].players.filter(
        (player) => player._id !== action.payload
      );
      state.loading = false
    },
    [removedPlayer.pending]: (state, action) => {
      state.loading = true
    },
    [removedPlayer.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [addNewPlayer.fulfilled]: (state, action) => {
      state.team.team[0].players.push(action.payload.team);
      state.loading = false
    },
    [addNewPlayer.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [addNewPlayer.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  }
})

export default teamSlice.reducer