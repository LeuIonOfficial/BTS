import { AxiosResponse } from 'axios';
import { $api } from '@api/http';
import { PriceQuoteType } from '@models/priceQuote.ts';

export class Offer {
  async getOfferById(id: string): Promise<AxiosResponse<any>> {
    return $api.get(`/api/offers/${id}`);
  }

  async getOffers(id: string): Promise<AxiosResponse<{ data: PriceQuoteType[] }>> {
    return $api.get(`/api/flights/${id}/offers`);
  }
}
