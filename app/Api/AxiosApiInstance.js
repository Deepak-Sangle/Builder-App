import axios from 'axios';
import {token} from '../Constants/projectConstants';

const BASE_URI = 'https://service.buildersbroadcast.com:444/';

const axiosInstance = axios.create({
  baseURL: BASE_URI
});

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;