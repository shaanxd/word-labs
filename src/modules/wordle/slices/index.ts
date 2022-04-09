import {createSlice} from '@reduxjs/toolkit';

export interface WordleState {}

const initialState: WordleState = {};

const slice = createSlice({
  name: 'wordle',
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
