import { createSlice } from '@reduxjs/toolkit'
import { fetchUserDetails, registerUser, userLogin } from '../auth/authAction'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    logout: (state) => {
      localStorage.removeItem('userToken')
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
    setUserToken: (state, action) => {
      state.userInfo = action.payload
    }
  },
  extraReducers: {
    // UserDetails
    [fetchUserDetails.pending]: (state) =>{
      state.loading = true
      state.error = null
    },
    [fetchUserDetails.fulfilled]: (state,{ payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
      state.success = true
    },
    [fetchUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
// export actions
export const { logout, setCredentials, setUserToken } = userSlice.actions
export default userSlice.reducer