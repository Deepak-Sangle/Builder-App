import axios from 'axios';

const PROJECT_BRODCASTES_URL = 'https://service.buildersbroadcast.com:444/';
const axiosAPIInstanceProject = axios.create({
  baseURL: PROJECT_BRODCASTES_URL,
});
axiosAPIInstanceProject.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken') || null;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosAPIInstanceProject;
