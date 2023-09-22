import { $api } from "../request";

export class Sales {
  async getSales(params: { page: number; per_page: number }) {
    return $api.get("/api/sales", {
      params: {
        ...params,
      },
    });
  }
}
