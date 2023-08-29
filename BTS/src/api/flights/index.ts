import { get } from "../request";
export class Flights {
  async getFlights(page: number, perPage: number) {
    let response = await get({
      apiUrl: `/api/flights?page=${page}&per_page=${perPage}`,
    });
    return response.data;
  }
}
