import {createSlice} from '@reduxjs/toolkit';

export interface CrosswordState {}

const initialState: CrosswordState = {};

const slice = createSlice({
  name: 'crossword',
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
