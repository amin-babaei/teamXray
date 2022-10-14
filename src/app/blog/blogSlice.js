import {createSlice } from '@reduxjs/toolkit'
import {fetchBlogs} from './blogAction';

const initialState = {
    blogList:[],
    loading: false,
    error: null,
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers:{
    [fetchBlogs.fulfilled]:(state,action) => {
      state.blogList = action.payload
      state.loading = false
    },
    [fetchBlogs.pending]:(state) => {
      state.loading = true
      state.error = null
    },
    [fetchBlogs.rejected]:(state) => {
      state.loading = false
      state.error = 'error'
    }
  }
})
export const { removeBlog } = blogSlice.actions;
export default blogSlice.reducer