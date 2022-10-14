import {createAsyncThunk} from "@reduxjs/toolkit"
import { getAllTeams } from './../../services/team';

export const fetchTeams = createAsyncThunk(
    'fetch/teams',async () => {
      try {
        const { data } = await getAllTeams();  
        return data
      }catch (error) {
        console.log(error)
      }
    }
  )
