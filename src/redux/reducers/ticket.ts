import { createAction, createReducer } from "@reduxjs/toolkit";
import { IPeopleCounter } from "../../models/ticket_interfaces";

const initialState = {};

export const setFrom = createAction<string>("SET_FROM");
export const setDestination = createAction<string>("SET_DESTINATION");
export const setDepartureDate = createAction<number | null>("SET_DEPARTURE_DATE");
export const setReturnDate = createAction<number | null>("SET_RETURN_DATE");
export const setPassengers = createAction<IPeopleCounter>("SET_PASSENGERS");
export const clearTicket = createAction<undefined>("CLEAR_TICKET");

export default createReducer(initialState, {
  [setFrom.type]: function (state: any, action) {
    state.from = action.payload;
  },
  [setDestination.type]: function (state: any, action) {
    state.to = action.payload;
  },
  [setDepartureDate.type]: function (state: any, action) {
    state.departureDate = action.payload;
  },
  [setReturnDate.type]: function (state: any, action) {
    state.returnDate = action.payload;
  },
  [setPassengers.type]: function (state: any, action) {
    state.passengers = action.payload;
  },
  [clearTicket.type]: function (state: any, action) {
    delete state.from;
    delete state.to;
    delete state.departureDate;
    delete state.returnDate;
    delete state.passengers;
  },
});
