import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  data: number;
};

const initialState: CounterState = {
  data: 42,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.data += action.payload;
    },
    decrement: (state, action) => {
      state.data -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export function incrementLegacy(amout = 1) {
  return {
    type: "increment",
    payload: amout,
  };
}

export function decrementLegacy(amout = 1) {
  return {
    type: "decrement",
    payload: amout,
  };
}

export default function counterReducer(
  state = initialState,
  action: { type: string; payload: number }
) {
  switch (action.type) {
    case "increment":
      return { ...state, data: state.data + action.payload };

    case "decrement":
      return { ...state, data: state.data - action.payload };

    default:
      return state;
  }
}
