import { authApi } from "./authentification";
import { profileApi } from "./profileApi";
import { Clients } from "./clients";
import { Flights } from "./flights";
import { Users } from "./users";

const auth = new authApi();
const profile = new profileApi();
const clients = new Clients();
const flights = new Flights();
const users = new Users();
export const Api = {
  auth,
  profile,
  clients,
  flights,
  users,
};
