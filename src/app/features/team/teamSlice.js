import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { addNewTeam, fetchTeam, fetchTeams, removedTeam, updateTeam } from './teamAction';

const teamsAdapter = createEntityAdapter({
  selectId: team => team?._id
})
const playerAdapter = createEntityAdapter({
   selectId: players=> players?._id
})

const initialState = teamsAdapter.getInitialState({
  status: 'idle',
  error: null,
  player:playerAdapter.getInitialState({
    status: 'idle',
    error: null,
  })
})

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.fulfilled, (state, action) => {
        teamsAdapter.upsertMany(state, action.payload);
        state.status = 'completed';
      })
      .addCase(fetchTeams.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTeam.fulfilled, (state, action) => {
        playerAdapter.setAll(state.player, action.payload);
        state.player.status = 'completed';
      })
      .addCase(fetchTeam.pending, (state) => {
        state.player.status = 'loading';
        state.player.error = null;
      })
      .addCase(fetchTeam.rejected, (state, action) => {
        state.player.status = 'failed';
        state.player.error = action.error.message;
      })
      .addCase(removedTeam.fulfilled, (state, action) => {
        teamsAdapter.removeOne(state, action.payload);
        state.status = 'completed';
      })
      .addCase(removedTeam.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(removedTeam.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewTeam.fulfilled, (state, action) => {
        teamsAdapter.addOne(state, action.payload);
        state.status = 'completed';
      })
      .addCase(addNewTeam.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addNewTeam.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateTeam.fulfilled, (state, action) => {
        teamsAdapter.upsertOne(state, action.payload);
        state.status = 'completed';
      })
      .addCase(updateTeam.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateTeam.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { selectAll: selectAllTeams} = teamsAdapter.getSelectors(state => state.teams)

export const selectPlayer = playerAdapter.getSelectors(
  (state) => state.teams.player
)
export default teamSlice.reducer