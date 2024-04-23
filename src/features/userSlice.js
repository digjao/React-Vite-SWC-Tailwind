import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    document: '',
    password: ''
  },
  error: null,
  success: false
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    }
  }
});

export const { setFormData, setError, setSuccess } = registrationSlice.actions;
export default registrationSlice.reducer;
