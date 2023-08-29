import { authApi } from "./authentification";
import { profileApi } from "./profileApi";
import { Clients } from "./clients";
import { Flights } from "./flights";

const auth = new authApi();
const profile = new profileApi();
const clients = new Clients();
const flights = new Flights();
export const Api = {
  auth,
  profile,
  clients,
  flights,
};
