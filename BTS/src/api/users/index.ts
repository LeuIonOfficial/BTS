import { get } from "../request";

export class Users {
  async getUsers() {
    let response = await get({ apiUrl: "/api/users" });
    return response.data;
  }
}
