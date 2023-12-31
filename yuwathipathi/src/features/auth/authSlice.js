import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin } from '../auth/authAction'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // ...logout reducer
      localStorage.removeItem('userToken')
      state.loading = false
      state.error = null
      state.userToken = null
      state.userInfo = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
    setUserToken: (state, action) => {
      state.userInfo = action.payload
    }
  },
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  },
})
export const { logout, setCredentials, setUserToken } = authSlice.actions
export default authSlice.reducer