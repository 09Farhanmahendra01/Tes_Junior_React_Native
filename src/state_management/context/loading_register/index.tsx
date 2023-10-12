import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};
const Loading_register = createSlice({
  name: 'loading register',
  initialState,
  reducers: {
    handler_loading_register: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {handler_loading_register} = Loading_register.actions;
export default Loading_register.reducer;
