import { MHotel } from "./hotel.model";


export interface MLocation {
  city:       string;
  country:    number;
  hotelList:  Array<MHotel>;
}
