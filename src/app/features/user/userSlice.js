import { createSlice } from '@reduxjs/toolkit'
import { toastSuccess } from '../../../helpers/Toast'
import {userLogin} from './userAction'

const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken: userToken,
    error: null,
    success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{ 
    addUser:(state,actions) => {
      state.loading = false
      state.userInfo = actions.payload
      state.userToken = userToken
      state.success = true
      state.error = null
    },
    clearUser:(state) => {
      state.userToken = null
    },
    logout: (state) => {
    localStorage.removeItem('token') // deletes token from storage
    state.loading = false
    state.userInfo = null
    state.userToken = null
    state.error = null
    toastSuccess('Logout successfully')
  },
},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.token
      state.success = payload.success
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export const { logout,addUser,clearUser } = userSlice.actions
export default userSlice.reducer