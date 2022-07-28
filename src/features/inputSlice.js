import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const inputSlice = createSlice(
  {
    name: 'input',
    initialState: [],
    reducers: {
      addText: (state, action) => {
        state.push(action.payload)
      }
    }

  }
);


export const { addText } = inputSlice.actions;

export default inputSlice.reducer;