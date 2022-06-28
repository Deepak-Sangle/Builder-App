import axios from 'axios';
import {token} from '../Constants/projectConstants';

const PLANS_BASE_URI = 'https://service.buildersbroadcast.com:448/';

const axiosAPIInstancePlan = axios.create({
  baseURL: PLANS_BASE_URI
});

axiosAPIInstancePlan.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosAPIInstancePlan;
