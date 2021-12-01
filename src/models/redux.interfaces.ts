import { IPeopleCounter } from "./ticket.interfaces";

export interface ITicketStore {
  from?: string;
  fromTimezone?: string;
  to?: string;
  destinationTimezone?: string;
  departureDate?: number;
  returnDate?: number;
  passengers?: IPeopleCounter;
  id: number;
}

export type AllTicketsStore = Array<ITicketStore>;

export interface IStore {
  ticket: ITicketStore;
  allTickets: AllTicketsStore;
}
