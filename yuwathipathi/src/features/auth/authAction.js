import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


const backendURL = 'http://localhost:9000'

//this is for register
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `${backendURL}/api/signup`,
        { name, email, password },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

//This is for Login
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${backendURL}/api/login`,
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.access_token)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userProfile = createAsyncThunk(
  'auth/profile',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${backendURL}/api/profile`,
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.access_token)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const fetchUserDetails = createAsyncThunk(
  'auth/fetchUserDetails',
  async (arg, { rejectWithValue ,getState}) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
      const { data } = await axios.get(
        `${backendURL}/api/userDetails`,
        config
      )
      localStorage.setItem('userToken', data.access_token)
      return data
    }
    catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

// This is for refreshPage
// export const userRefresh = createAsyncThunk(
//   'auth/refresh',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       // configure header's Content-Type as JSON
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//       const { data } = await axios.get(
//         `${backendURL}/api/refresh`,
//         { token },
//         config
//       )
//       // store user's token in local storage
//       localStorage.setItem('userToken', data.access_token)
//       return data
//     } catch (error) {
//       // return custom error message from API if any
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message)
//       } else {
//         return rejectWithValue(error.message)
//       }
//     }
//   }
// )


