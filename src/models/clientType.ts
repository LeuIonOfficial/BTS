export interface IClient {
  created_at: string;
  emails: string[];
  first_name: string;
  id: number;
  last_name: string;
  phones: string[];
  updated_at: string;
}

export interface IUser {
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  is_deactivated: number;
  name: string;
  phone: string;
  role: string;
  updated_at: string;
}

interface IDepartureDetails {
  airport_name: string;
  city_name: string;
  country_name: string;
  iata_code: string;
  id: number;
  is_favorite: number;
  region_id: string;
  state_name: null;
}

export interface IDeparture {
  departure_date: string;
  from: IDepartureDetails;
  to: IDepartureDetails;
}
