import { $api } from "@api/http";
import { PostUsersParamsType, PostUserType } from "@models/user.ts";
import { notification } from "antd";

export class Users {
  async getUsers(params: PostUsersParamsType) {
    return await $api.get("/api/users", {
      params: {
        ...params,
      },
    });
  }

  async postUser(data: PostUserType) {
    const response = await $api.post("/api/users", data).catch((e) => e);
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      notification.success({
        message: `User ${data.name} successfully added`,
      });
    }
    return response;
  }

  async putUser(data: PostUserType) {
    const response = await $api
      .put(`/api/users/${data.id}`, data)
      .catch((e) => e);
    if (response.status >= 200 && response.status < 300) {
      notification.success({
        message: `User ${data.name} successfully updated`,
      });
    }
    return response;
  }
}
