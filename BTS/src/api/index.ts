import { authApi } from "./authentification";
import { profileApi } from "./profileApi";
import { Clients } from "./clients";
import { Flights } from "./flights";
import { Users } from "./users";
import { Sales } from "./sales";

const auth = new authApi();
const profile = new profileApi();
const clients = new Clients();
const flights = new Flights();
const users = new Users();
const sales = new Sales();
export const Api = {
  auth,
  profile,
  clients,
  flights,
  users,
  sales,
};
