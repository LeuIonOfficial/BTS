import { get, post } from "../request";
import { IPostFlightsType } from "@models/postFlightsType.ts";
export class Flights {
  async getFlights(page: number, perPage: number) {
    let response = await get({
      apiUrl: `/api/flights?page=${page}&per_page=${perPage}`,
    });
    return response.data;
  }

  async postFlight(id: string | undefined, values: IPostFlightsType) {
    const data = { ...values, user_id: id };
    return post({
      apiUrl: `/api/flights`,
      body: data,
    });
  }
}
