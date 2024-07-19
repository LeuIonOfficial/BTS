import { IFlightDetails } from '@models/flights.ts';

export type PriceQuoteType = {
  id: number;
  user_id: number;
  flight_id: number;
  is_hidden: null;
  is_visited: null;
  hash: string;
  comment: string;
  dump: string;
  details: IFlightDetails[];
  created_at: string;
  packageable: {
    id: number;
    name: string;
    fare_type: string;
    fare_price_adult: string;
    fare_price_child: string;
    fare_price_infant: string;
    total_fare_price: number;
    total_fare_price_adult: number;
    total_fare_price_child: number;
    total_fare_price_infant: number;
  };
};
