import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import { authApi } from './services/auth/authService'
import userSlice from '../features/auth/userSlice'


const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
export default store