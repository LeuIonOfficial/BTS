import { createContext } from 'react';
import { GetUserType } from '@models/user.ts';
import { GetFlightsType } from '@models/flights.ts';

export const UserContext = createContext<GetUserType | undefined>(undefined);
export const FlightDetailsContext = createContext<GetFlightsType | undefined>(undefined);
