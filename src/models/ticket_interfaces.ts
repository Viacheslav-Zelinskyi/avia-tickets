export interface IPeopleCounter {
  adult: number;
  childrens: number;
  infants: number;
}

export interface ITicket {
  from: string;
  to: string;
  departureDate: number;
  returnDate: number;
  passengers: IPeopleCounter;
}
