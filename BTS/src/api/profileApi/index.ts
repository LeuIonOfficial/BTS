import { get } from "../request";
export class profileApi {
  async getProfile() {
    let response = await get({ apiUrl: "/api/me" });
    return response.data;
  }
}
