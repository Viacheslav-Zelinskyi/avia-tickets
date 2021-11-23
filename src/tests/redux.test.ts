import store from "../redux";
import { addTicket } from "../redux/reducers/allTickets";
import {
  setFrom,
  setDestination,
  setDepartureDate,
  setReturnDate,
  setPassengers,
} from "../redux/reducers/ticket";

const tikcetMock = {
  to: "USA",
  from: "Poland",
  departureDate: 1637660504,
  returnDate: 1631660204,
  passengers: {
    adult: 5,
    childrens: 2,
    infants: 1,
  },
};

describe("Redux store tests", () => {
  it("Store initialization", () => {
    const state = store.getState();

    expect(state).toEqual({ allTickets: [], ticket: {} });
  });

  it("Add ticket to array", () => {
    store.dispatch(addTicket(tikcetMock));

    const allTicketsState = store.getState().allTickets;

    expect(allTicketsState[0]).toEqual({ id: 0, ...tikcetMock });
  });

  it("Test ticket reducers", () => {
    store.dispatch(setFrom(tikcetMock.from));
    store.dispatch(setDestination(tikcetMock.to));
    store.dispatch(setDepartureDate(tikcetMock.departureDate));
    store.dispatch(setReturnDate(tikcetMock.returnDate));
    store.dispatch(setPassengers(tikcetMock.passengers));

    const ticket = store.getState().ticket;

    expect(ticket).toEqual(tikcetMock);
  });
});
