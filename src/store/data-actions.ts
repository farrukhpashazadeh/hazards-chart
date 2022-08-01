import dateSlice from "./dateSlice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { DateModel } from "../models/redux-models";
import DateService from "../service/dateService";

export const dateActions = dateSlice.actions;

export const fetchData = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response: DateModel = await DateService.getChartData();
    dispatch(dateActions.getData(response));
  };
};
