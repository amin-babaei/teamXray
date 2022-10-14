import {createSlice } from '@reduxjs/toolkit'
import {fetchTeams} from './teamAction';

const initialState = {
    teamList:[],
    loading: false,
    error: null,
}

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  extraReducers:{
    [fetchTeams.fulfilled]:(state,action) => {
      state.teamList = action.payload
      state.loading = false
    },
    [fetchTeams.pending]:(state) => {
      state.loading = true
      state.error = null
    },
    [fetchTeams.rejected]:(state) => {
      state.loading = false
      state.error = 'error'
    }
  }
})

export default teamSlice.reducer