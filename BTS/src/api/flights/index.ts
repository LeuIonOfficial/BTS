import { AxiosResponse } from "axios";

import { $api } from "@api/http";
import { PostFlightType } from "@models/flights.ts";
import { GetFlightsParamsType, GetFlightsType } from "@models/flights.ts";
import { ServerResponseType } from "@models/serverResponse.ts";
import { notification } from "antd";

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
    const response = await $api.post("/api/flights", data).catch((e) => e);
    if (response.status >= 200 && response.status < 300) {
      notification.success({
        message: `Flight request successfully created`,
      });
    }
    return response;
  }
}
