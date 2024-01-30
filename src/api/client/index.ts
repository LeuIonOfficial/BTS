import { $api } from '@api/http';

export class Client {
  async getClientById(clientId?: number) {
    if (clientId) {
      return $api.get(`/api/clients/${clientId}`);
    }
  }
}
