import axios from 'axios';
import axiosRetry from 'axios-retry';

import { DEFAULT_AXIOS_RETRY_CONFIG } from 'settings/constants/retry';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_API,
});
export const customApi = axios.create({
  baseURL: '/api',
});

axiosRetry(api, DEFAULT_AXIOS_RETRY_CONFIG);
axiosRetry(customApi, DEFAULT_AXIOS_RETRY_CONFIG);
