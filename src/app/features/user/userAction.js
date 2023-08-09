import {createAsyncThunk} from "@reduxjs/toolkit"
import http from '../../../services/httpService';
import { toastError, toastSuccess } from '../../../helpers/Toast';

export const userProfile = createAsyncThunk(
    'user/Profile',
    async () => {
      try {
        const { data }  = await http.get(`/api/profile`)
        return data.user
      }catch (error) {
        console.log(error)
      }
    }
  )
export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const { data,status } = await http.post(`${process.env.REACT_APP_BASE_URL}/api/login`,{ email, password },)
        if(status === 200){
            toastSuccess('Login successfully')
            return data.user
        }
      }catch (error) {
        if (error.response && error.response.data.message) {
            toastError('incorrect email or password')
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
export const userLogout = createAsyncThunk(
    'user/logout',
    async () => {
      try {
        await http.get(`${process.env.REACT_APP_BASE_URL}/api/logout`)
      }catch (error) {
        console.log(error);
      }
    }
  )
