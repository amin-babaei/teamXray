import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loadingSlice'
import userReducer from './user/userSlice'
import blogReducer from './blog/blogSlice'
import teamReducer from './team/teamSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs:blogReducer,
    teams:teamReducer,
    loading:loadingSlice
  }
})
export default store