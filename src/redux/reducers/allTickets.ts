import { createAction, createReducer, current } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const addTicket = createAction<Object>("ADD_TICKET");
export const updateTicket = createAction<Object>("UPDATE_TICKET");

export default createReducer(initialState, {
  [addTicket.type]: function (state: any, action) {
    state.push({ id: state.length, ...action.payload });
  },
  [updateTicket.type]: function (state: any, action) {
    return current(state).map((ticket: any) =>
      ticket.id === action.payload.id ? action.payload.ticket : ticket
    );
  },
});
