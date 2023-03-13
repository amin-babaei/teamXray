import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { addNewPlayer, addNewTeam, fetchTeam, fetchTeams, removedPlayer, removedTeam } from './teamAction';

const teamsAdaptor = createEntityAdapter({
  selectId: team => team?._id
})
const playerAdaptor = createEntityAdapter({
   selectId: players=> players?._id
})

const initialState = teamsAdaptor.getInitialState({
  status: 'idle',
  error: null,
  player:playerAdaptor.getInitialState({
    status: 'idle',
    error: null,
  })
})

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  extraReducers: {
    [fetchTeams.fulfilled]: (state, action) => {
      teamsAdaptor.upsertMany(state, action.payload)
      state.status = 'completed'
    },
    [fetchTeams.pending]: (state) => {
      state.status = "loading"
      state.error = null
    },
    [fetchTeams.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    },
    [fetchTeam.fulfilled]: (state, action) => {
      playerAdaptor.setAll(state.player, action.payload)
      state.player.status = 'completed'
    },
    [fetchTeam.pending]: (state) => {
      state.player.status = "loading"
      state.player.error = null
    },
    [fetchTeam.rejected]: (state, action) => {
      state.player.status = "failed"
      state.player.error = action.error.message
    },
    [removedTeam.fulfilled]: (state, action) => {
      teamsAdaptor.removeOne(state,action.payload)
      state.status = "completed"
    },
    [removedTeam.pending]: (state, action) => {
      state.status = "loading"
      state.error = null
    },
    [removedTeam.rejected]: (state, action) => {
      state.status = "faild"
      state.error = action.error.message
    },
    [addNewTeam.fulfilled]: (state, action) => {
      teamsAdaptor.addOne(state,action.payload.team)
      state.status = "completed"
    },
    [addNewTeam.pending]: (state, action) => {
      state.status = "loading"
      state.error = null
    },
    [addNewTeam.rejected]: (state, action) => {
      state.status = "faild"
      state.error = action.error.message
    },
    [removedPlayer.fulfilled]: (state, action) => {
      playerAdaptor.removeOne(state,action.payload)
      state.player.status = "completed"
    },
    [removedPlayer.pending]: (state, action) => {
      state.player.status = "loading"
    },
    [removedPlayer.rejected]: (state, action) => {
      state.player.status = "faild"
      state.error = action.error.message
    },
    [addNewPlayer.fulfilled]: (state, action) => {
      playerAdaptor.addOne(state,action.payload)
      state.player.status = "completed"
    },
    [addNewPlayer.pending]: (state, action) => {
      state.player.status = "loading"
      state.player.error = null
    },
    [addNewPlayer.rejected]: (state, action) => {
      state.player.status = "failed"
      state.player.error = action.error.message
    },
  }
})
export const { selectAll: selectAllTeams} = teamsAdaptor.getSelectors(state => state.teams)

export const selectPlayer = playerAdaptor.getSelectors(
  (state) => state.teams.player
)
export default teamSlice.reducer