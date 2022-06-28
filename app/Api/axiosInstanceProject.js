import axios from 'axios';
import {token} from '../Constants/projectConstants';

const BASE_URI = 'https://service.buildersbroadcast.com/';

const PROJECT_BRODCASTES_URL = 'https://service.buildersbroadcast.com:444/';

const axiosAPIInstanceProject = axios.create({
  baseURL: BASE_URI
});

axiosAPIInstanceProject.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosAPIInstanceProject;
