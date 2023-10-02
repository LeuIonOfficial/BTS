import { AxiosResponse } from "axios";

import { $api } from "@api/http";
import { PostFlightType } from "@models/flights.ts";
import { GetFlightsParamsType, GetFlightsType } from "@models/flights.ts";
import { ServerResponseType } from "@models/serverResponse.ts";
import { notification } from "antd";
import { AxiosError } from "axios";

export class Flights {
  async getFlights(
    params: GetFlightsParamsType,
  ): Promise<AxiosResponse<ServerResponseType<GetFlightsType>>> {
    return await $api.get("/api/flights", {
      params: {
        ...params,
      },
    });
  }

  async postFlight(data: PostFlightType) {
    try {
      const response = await $api.post("/api/flights", data);
      if (response.status >= 200 && response.status < 300) {
        notification.success({
          message: `Flight request successfully created`,
        });
      }
      return response;
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.message);
        notification.error({
          message: `Flight request failed: ${e.message}`,
        });
      } else {
        console.log(e);
      }
    }
  }
}
