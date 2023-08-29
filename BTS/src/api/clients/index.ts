import { get } from "../request";

export class Clients {
  async getClients() {
    return get({ apiUrl: "/api/clients/4/requests" });
  }
}
