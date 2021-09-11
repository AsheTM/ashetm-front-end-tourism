import { MProperty } from "./property.model";
import { MLocation } from "./location.model";


export interface MHotel {
  id:           string;
  name:         number;
  locationList: Array<MLocation>;
  propertyList: Array<MProperty>;
}
