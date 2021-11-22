import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const addTicket = createAction<Object>("ADD_TICKET");

export default createReducer(initialState, {
    [addTicket.type]: function(state: any, action) {
        state.push(action.payload);
    }
});