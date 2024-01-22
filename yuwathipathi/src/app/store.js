import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import { authApi } from './services/auth/authService'
import userSlice from '../features/auth/userSlice'
import authReducer from '../features/auth/authSlice'
import alertSlice from '../features/auth/alertSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    user: userSlice,
    notifications: alertSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
export default store