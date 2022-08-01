import { DateModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: DateModel = {
  value: [],
  count: 0,
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getData: (state: any, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    incrementCount: (state: any) => {
      state.count++;
    },
    decrementCount: (state: any) => {
      state.count--;
    },
  },
});
export const { decrementCount, incrementCount } = dateSlice.actions;
export default dateSlice;
