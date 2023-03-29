import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../config/state/store';
import { CounterState } from './state-skel-default';

const counterSlice = createSlice({
  name: 'counter',
  initialState: CounterState,
  reducers: {
    increment: (state) => { 
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;