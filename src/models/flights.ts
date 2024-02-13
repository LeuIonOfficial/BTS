import { IClient, IUser } from '@models/clientType.ts';

export interface GetFlightsParamsType {
  page: number;
  per_page: number;
}

export interface GetFlightsType {
  assigned_time: null;
  client: IClient;
  client_id: number;
  comment: string;
  created_at: string;
  details: IFlightDetails[];
  id: number;
  ip_address: string;
  is_conversion: number;
  marketing_source: string;
  user: IUser;
  user_id: number;
}

export interface PostFlightType {
  user_id?: string;
  first_name: string;
  last_name: string;
  notes: string;
  emails: string[];
  phones: string[];
  marketing_source: string;
  details: IFlightDetails[];
}

export interface IFlightDetails {
  child: number;
  price: number;
  adults: number;
  iata_to: string;
  infants: number;
  direction: string;
  iata_from: string;
  flight_class: string;
  departure_date: string;
  from: IFlightDetailsFromTo;
  to: IFlightDetailsFromTo;
}

export interface IFlightDetailsFromTo {
  id: number;
  airport_name: string;
  iata_code: string;
  city_name: string;
  state_name: null;
  country_name: string;
  region_id: string;
  is_favorite: number;
}
