import { get, post } from "../request";
import { LoginData, LoginResult } from "@models/authentificationType.ts";

const storageKeyAccessToken = "ccpx_access_token";
export class authApi {
  private accessToken: string;

  constructor() {
    this.accessToken = localStorage.getItem(storageKeyAccessToken) ?? "";
  }

  async login(data: LoginData): Promise<LoginResult> {
    let response = await post({
      apiUrl: "/api/auth/login",
      body: {
        // grant_type: grantType,
        email: data.email,
        password: data.password,
      },
      otherOpts: {
        Authorization: this.accessToken,
      },
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
    await get({
      apiUrl: "/api/logout",
      otherOpts: {
        Authorization: this.accessToken,
      },
    });
    this.accessToken = "";
    localStorage.removeItem(storageKeyAccessToken);
  }
}
