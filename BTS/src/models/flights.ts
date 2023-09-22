import { IClient, IDeparture, IUser } from "@models/clientType.ts";

export interface GetFlightsParamsType {
  page: number;
  per_page: number;
}

interface FlightDetailsType {
  adults: number;
  child: number;
  direction: string;
  flight_class: string;
  flights: IDeparture[];
  infants: number;
  price: number;
}

export interface GetFlightsType {
  assigned_time: null;
  client: IClient;
  client_id: number;
  comment: string;
  created_at: string;
  details: FlightDetailsType;
  id: number;
  ip_address: string;
  is_conversion: number;
  marketing_source: string;
  user: IUser;
  user_id: number;
}

export interface PostFlightType {
  user_id: string;
  first_name: string;
  last_name: string;
  notes: string;
  emails: string[];
  phones: string[];
  marketing_source: string;
  details: [
    {
      adults: string;
      child: string;
      infants: string;
      iata_from: string;
      iata_to: string;
      departure_date: string;
    },
  ];
}
