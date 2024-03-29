import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import { blogSlice } from './features/blogSlice'
import teamReducer from './features/team/teamSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    teams: teamReducer,
    [blogSlice.reducerPath]: blogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(blogSlice.middleware),

})
export default store