import {createAsyncThunk} from "@reduxjs/toolkit"
import http from '../../services/httpService';
import { toastError, toastSuccess } from './../../helpers/Toast';
import jwt_decode from 'jwt-decode';

export const userLogin = createAsyncThunk(
    'login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const { data,status } = await http.post(`${process.env.SERVERAPI}/api/login`,{ email, password },)
        if(status===200){
            localStorage.setItem('token', data.token)
            jwt_decode(data.token)
            toastSuccess('Login successfully')
            return data
        }
      }catch (error) {
        console.log(error)
        if (error.response && error.response.data.message) {
            toastError('incorrect email or password')
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
