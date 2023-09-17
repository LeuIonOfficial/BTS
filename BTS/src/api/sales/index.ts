import get from "../request";

export class Sales {
  async getSales(page: number, perPage: number) {
    let response = await get({
      apiUrl: `/api/sales?page=${page}&per_page=${perPage}`,
    });
    return response.data;
  }
}
