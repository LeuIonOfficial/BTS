import { authApi } from "./authentification";
import { profileApi } from "./profileApi";
import { Flights } from "./flights";
import { Users } from "./users";
import { Sales } from "./sales";

const auth = new authApi();
const profile = new profileApi();
const flights = new Flights();
const users = new Users();
const sales = new Sales();
export const Api = {
  auth,
  profile,
  flights,
  users,
  sales,
};
