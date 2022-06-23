import axios from 'axios';
import {token} from '../Constants/projectConstants';

const BASE_URI = 'https://service.buildersbroadcast.com/';

const axiosAPIInstanceProject = axios.create({
  baseURL: BASE_URI
});

axiosAPIInstanceProject.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosAPIInstanceProject;
