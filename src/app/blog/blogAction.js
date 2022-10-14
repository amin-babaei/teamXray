import {createAsyncThunk} from "@reduxjs/toolkit"
import { getAllBlogs } from "../../services/blog";

export const fetchBlogs = createAsyncThunk(
    'fetch/blogs',async () => {
      try {
        const { data } = await getAllBlogs();  
        return data
      }catch (error) {
        console.log(error)
      }
    }
  )
