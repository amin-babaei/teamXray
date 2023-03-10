import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loadingSlice'
import userReducer from './user/userSlice'
import { blogSlice } from './features/blogSlice'
import teamReducer from './team/teamSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    teams: teamReducer,
    loading: loadingSlice,
    [blogSlice.reducerPath]: blogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogSlice.middleware),
})
export default store