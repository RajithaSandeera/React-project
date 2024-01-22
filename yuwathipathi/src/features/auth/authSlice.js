import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin, userProfile } from '../auth/authAction'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  loggedUserInfo: null,
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
      state.userToken = action.payload
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
      state.success = false

    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
      state.success = true
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.success = false
      alert('payload'+ payload)

    },
    // User Profile
    [userProfile.pending]: (state) => {
      state.loading = true
      state.error = null
      state.success = false
    },
    [userProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.loggedUserInfo = payload
      state.success = true

    },
    [userProfile.rejected]: (state, { payload}) => {
      state.loading = false
      state.error = payload
      state.success = false
    }
  },
})
export const { logout, setCredentials, setUserToken } = authSlice.actions
export default authSlice.reducer