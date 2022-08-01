import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "./dateSlice";

const store = configureStore({
  reducer: { date: dateSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
