import { $api } from '@api/http';

export class Sales {
  async getSales(params: { page: number; per_page: number }) {
    return $api.get('/api/sales', {
      params: {
        ...params,
      },
    });
  }
}
