import { get } from "../request";

export class Users {
  async getUsers(page?: number, perPage?: number) {
    let response = await get({
      apiUrl: `/api/users?page=${page}&per_page=${perPage}`,
    });
    return response.data;
  }
}
