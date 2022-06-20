import axios from 'axios';

const BASE_URI = 'https://service.buildersbroadcast.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URI,
});

axiosInstance.interceptors.request.use(config => {
  //const token = localStorage.getItem('accessToken') || null;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNzJhNzRjYi1lNDc1LTRiYTktODUzMC0wOWVjODE2NDQzNjUiLCJmaXJzdE5hbWUiOiJtYXJ5IiwibGFzdE5hbWUiOiJqb3NlcGgiLCJ1c2VyTmFtZSI6Im1hcnkgam9zZXBoIiwicHJvZmlsZUltYWdlIjoiaW1hZ2UtdXJsLTEiLCJlbWFpbCI6Im1hcnlrdW1hckBnbWFpbC5jb20iLCJwaG9uZSI6Iis5MTk5MzM0NDU1NzYiLCJyb2xlSWQiOiIyMDY1Mzc5YS00NGNkLTRhODUtODA1ZS03YzBjMDE2YTI5OTIiLCJyb2xlTmFtZSI6IlNVUEVSX0FETUlOIiwiZ3JvdXBJZCI6ImE0ODY0N2UyLWQ0NzgtNDE1ZS1iMGJmLTNlZDJmYmM2ODExZCIsImdyb3VwTmFtZSI6ImFwYXJuYSBjb25zdHJ1Y3Rpb25zIiwic2hvcnROYW1lIjoiYXNkZiIsImRlc2lnbmF0aW9uIjoiVGVhbSBIZWFkIiwidXNlclR5cGUiOiJidWlsZGVyIiwidGVhbU5hbWUiOm51bGwsImlhdCI6MTY1MzY1NzE0NiwiZXhwIjoxNjU3MjU3MTQ2fQ.Lsm -fMxiViWsoknLxb5f -RhsHNkhXjhhb04fOt069Po';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
