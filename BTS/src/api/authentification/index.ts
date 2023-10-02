import { $api } from "@api/http";
import { LoginData, LoginResult } from "@models/authentificationType.ts";

const storageKeyAccessToken = "ccpx_access_token";
export class authApi {
  private accessToken: string;

  constructor() {
    this.accessToken = localStorage.getItem(storageKeyAccessToken) ?? "";
  }

  async login(data: LoginData): Promise<LoginResult> {
    let response = await $api.post("/api/auth/login", {
      email: data.email,
      password: data.password,
    });
    if (response.status === 200) {
      this.accessToken = response.data["access_token"];
      localStorage.setItem(storageKeyAccessToken, this.accessToken);
      return {
        success: true,
        accessToken: response.data["access_token"],
        message: response.data.message,
      };
    }
    return {
      success: false,
      accessToken: response.data["error"],
      message: response.data.message,
    };
  }
  async logout() {
    await $api.get("/api/logout");
    this.accessToken = "";
    localStorage.removeItem(storageKeyAccessToken);
  }
}
