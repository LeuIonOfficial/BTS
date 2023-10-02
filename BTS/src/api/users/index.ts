import { $api } from "@api/http";
import { PostUsersParamsType, PostUserType } from "@models/user.ts";
import { notification } from "antd";
import { AxiosError } from "axios";

export class Users {
  async getUsers(params: PostUsersParamsType) {
    return await $api.get("/api/users", {
      params: {
        ...params,
      },
    });
  }

  async postUser(data: PostUserType) {
    try {
      const response = await $api.post("/api/users", data);
      if (response.status >= 200 && response.status < 300) {
        notification.success({
          message: `User ${data.name} successfully added`,
        });
      }
      return response;
    } catch (e) {
      if (e instanceof AxiosError) {
        notification.error({
          message: `Registration failed: ${e.response?.data.message}`,
        });
      } else {
        console.log(e);
      }
    }
  }

  async putUser(data: PostUserType) {
    try {
      const response = await $api.put(`/api/users/${data.id}`, data);
      if (response.status >= 200 && response.status < 300) {
        notification.success({
          message: `User ${data.name} successfully updated`,
        });
      }
      return response;
    } catch (e) {
      if (e instanceof AxiosError) {
        notification.error({
          message: `Updating failed: ${e.response?.data.message}`,
        });
      } else {
        console.log(e);
      }
    }
  }
}
