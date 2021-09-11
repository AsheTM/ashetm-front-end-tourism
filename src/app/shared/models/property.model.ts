import { MReservation } from "./reservation.model";

import { EProperty } from "../enums";


export interface MProperty {
  id:               string;
  room:             number;
  type:             EProperty;
  price:            number;
  reservationList:  Array<MReservation>;
}
