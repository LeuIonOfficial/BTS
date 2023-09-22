import { $api } from "../request";
export class profileApi {
  async getProfile() {
    let response = await $api.get("/api/me");
    return response.data;
  }
}
