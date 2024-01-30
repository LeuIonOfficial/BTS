import { notification } from 'antd';
import axios from 'axios';

export const $api = axios.create({
  baseURL: import.meta.env.VITE_SECRET_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

$api.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('ccpx_access_token')}`;
  return config;
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      notification.error({ message: 'Unauthorized user' });
    }

    if (error.response.status === 404) {
      notification.error({ message: 'Data not found' });
    }
    return error;
  },
);
