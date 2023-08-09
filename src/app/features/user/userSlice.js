import { createSlice } from '@reduxjs/toolkit'
import {userLogin, userLogout, userProfile} from './userAction'

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
    success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.success = payload.success
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [userProfile.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.success = true
    },
    [userProfile.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [userLogout.fulfilled]: (state) => {
      state.loading = false
      state.userInfo = null
      state.success = true
    },
  },
})
export default userSlice.reducer