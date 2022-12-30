import axios from 'axios';
import apiConfig from './apiConfig';

const axiosInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: apiConfig.apiKey,
    language: 'es-ES',
  },
});

export default axiosInstance;
