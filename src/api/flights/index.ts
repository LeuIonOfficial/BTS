import { AxiosResponse } from 'axios';

import { $api } from '@api/http';
import {
  GetFlightsParamsType,
  GetFlightsType,
  IFlightDetails,
  PostFlightType,
} from '@models/flights.ts';
import { ServerResponseType } from '@models/serverResponse.ts';
import { notification } from 'antd';

export class Flights {
  async getFlights(
    params: GetFlightsParamsType,
  ): Promise<AxiosResponse<ServerResponseType<GetFlightsType>>> {
    return $api.get('/api/flights', {
      params: {
        ...params,
      },
    });
  }

  async getFlightById(
    id: string | undefined,
  ): Promise<AxiosResponse<ServerResponseType<GetFlightsType>> | undefined> {
    return $api
      .get<AxiosResponse<ServerResponseType<GetFlightsType>>>(`/api/flights/${id}`)
      .catch((e) => e);
  }

  async postFlight(data: PostFlightType) {
    const response = await $api.post('/api/flights', data).catch((e) => e);
    if (response.status >= 200 && response.status < 300) {
      notification.success({
        message: `Flight request successfully created`,
      });
    }
    return response;
  }
}
