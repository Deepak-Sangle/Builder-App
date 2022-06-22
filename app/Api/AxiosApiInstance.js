import axios from 'axios';

const BASE_URI = 'https://service.buildersbroadcast.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URI,
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNzJhNzRjYi1lNDc1LTRiYTktODUzMC0wOWVjODE2NDQzNjUiLCJmaXJzdE5hbWUiOiJtYXJ5IiwibGFzdE5hbWUiOiJqb3NlcGgiLCJ1c2VyTmFtZSI6Im1hcnkgam9zZXBoIiwicHJvZmlsZUltYWdlIjoiaW1hZ2UtdXJsLTEiLCJlbWFpbCI6Im1hcnlrdW1hckBnbWFpbC5jb20iLCJwaG9uZSI6Iis5MTk5MzM0NDU1NzYiLCJyb2xlSWQiOiIyMDY1Mzc5YS00NGNkLTRhODUtODA1ZS03YzBjMDE2YTI5OTIiLCJyb2xlTmFtZSI6IlNVUEVSX0FETUlOIiwiZ3JvdXBJZCI6ImE0ODY0N2UyLWQ0NzgtNDE1ZS1iMGJmLTNlZDJmYmM2ODExZCIsImdyb3VwTmFtZSI6ImFwYXJuYSBjb25zdHJ1Y3Rpb25zIiwic2hvcnROYW1lIjoiYXNkZiIsImRlc2lnbmF0aW9uIjoiVGVhbSBIZWFkIiwidXNlclR5cGUiOiJidWlsZGVyIiwidGVhbU5hbWUiOm51bGwsInBlcm1pc3Npb25zIjpbXSwiaWF0IjoxNjU0NDk4MTE0LCJleHAiOjE2NTgwOTgxMTR9.-OVp3-FPtCn8ufWSjVOoui4CTTZ0bTmf2xa7ixWfFPs';

axiosInstance.interceptors.request.use(config => {
  //const token = localStorage.getItem('accessToken') || null;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
