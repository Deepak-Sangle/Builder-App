import axios from 'axios';

const BASE_URI = 'https://service.buildersbroadcast.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URI,
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3NDNlNWFmYS03NGE4LTRlOWEtYmExZC1hYzBlM2ZjYTE4YjAiLCJmaXJzdE5hbWUiOiJzcmkiLCJsYXN0TmFtZSI6Imt1bWFyIiwidXNlck5hbWUiOiJzcmkga3VtYXIiLCJwcm9maWxlSW1hZ2UiOm51bGwsImVtYWlsIjoic3Jpa2FudGg3MkBnbWFpbC5jb20iLCJwaG9uZSI6Iis5MTk4MzQ1Njc4OTMiLCJyb2xlSWQiOiIyMDY1Mzc5YS00NGNkLTRhODUtODA1ZS03YzBjMDE2YTI5OTIiLCJyb2xlTmFtZSI6IlNVUEVSX0FETUlOIiwiZ3JvdXBJZCI6WyJhNDg2NDdlMi1kNDc4LTQxNWUtYjBiZi0zZWQyZmJjNjgxMWQiXSwiZ3JvdXBOYW1lIjpbImFwYXJuYSBjb25zdHJ1Y3Rpb25zIl0sInNob3J0TmFtZSI6ImFzZGYiLCJsb2dvIjoiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vd2ViLmJ1aWxkZXJzYnJvYWRjYXN0LmNvbS93ZWIuYnVpbGRlcnNicm9hZGNhc3QuY29tL2E0ODY0N2UyLWQ0NzgtNDE1ZS1iMGJmLTNlZDJmYmM2ODExZC9sb2dvLyIsImRlc2lnbmF0aW9uIjoiaGVhZCBkZXBhcnRtZW50IiwidXNlclR5cGUiOiJidWlsZGVyIiwidGVhbU5hbWUiOm51bGwsInBlcm1pc3Npb25zIjpbXSwiaWF0IjoxNjU1OTc0OTExLCJleHAiOjE2NTk1NzQ5MTF9.liqSWyq5FpKIlWVMOOWMjQQLkVNWqx-7qtAAmAo6E4k';
axiosInstance.interceptors.request.use(config => {
  // const token = localStorage.getItem('accessToken') || null;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
