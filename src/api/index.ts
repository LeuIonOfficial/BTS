import { authApi } from './authentification';
import { profileApi } from './profileApi';
import { Flights } from './flights';
import { Users } from './users';
import { Sales } from './sales';
import { Client } from '@api/client';
import { Offer } from '@api/offers';

const auth = new authApi();
const profile = new profileApi();
const flights = new Flights();
const users = new Users();
const sales = new Sales();
const client = new Client();
const offer = new Offer();
export const Api = {
  auth,
  profile,
  flights,
  users,
  sales,
  client,
  offer,
};
