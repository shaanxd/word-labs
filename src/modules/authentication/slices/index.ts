import {createSlice} from '@reduxjs/toolkit';

export interface AuthenticationState {}

const initialState: AuthenticationState = {};

const slice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
