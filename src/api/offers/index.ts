import { AxiosResponse } from 'axios';
import { $api } from '@api/http';
import { PriceQuoteType } from '@models/priceQuote.ts';
import { ServerResponseType } from '@models/serverResponse.ts';

export class Offer {
  async getOfferById(id: string): Promise<AxiosResponse<{ data: PriceQuoteType[] }>> {
    return $api.get(`/api/offers/${id}`);
  }

  async getOffers(
    id: string | undefined,
    params: { page: number; per_page: number },
  ): Promise<AxiosResponse<ServerResponseType<PriceQuoteType[]>>> {
    return $api.get(`/api/flights/${id}/offers`, { params });
  }

  async getMilesPrices<T>() {
    return $api.get<ServerResponseType<T>>('/api/miles');
  }
}
