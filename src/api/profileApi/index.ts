import { $api } from "@api/http";
export class profileApi {
  async getProfile() {
    const response = await $api.get("/api/me");

    return response.data;
  }
}
