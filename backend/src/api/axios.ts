// backend axios

import axios from 'axios';

const tourAPI = axios.create({
  // 관광데이터, 카카오 분리해서 요청
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: { Authorization: 'Bearer YOUR_API_TOKEN' },
  withCredentials: true,
});
