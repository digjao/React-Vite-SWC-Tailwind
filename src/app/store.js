import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../features/userSlice'

const store = configureStore({
  reducer: {
    registration: registrationReducer

  }
});

export default store;
