import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alerts',
  initialState: {
    alerts: []
  },
  reducers: {
    createAlert: (state, action) => {
      state.alerts.push({
        message: action.payload.message,
        type: action.payload.type
      });
    }
  },
  // extraReducers should be defined here
  // extraReducers: {
  //   [extraAction]: (state, action) => {
  //     state.alerts.push({ message: action.error.message, type: "error" });
  //   }
  // },
});

export const { createAlert } = alertSlice.actions;

export const alertActions = {
  createAlert,
};

export default alertSlice.reducer;