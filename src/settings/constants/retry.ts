import { AxiosError } from 'axios';

export const RETRIES_DELAY_IN_MS = 1000;
export const ADDRESS_RETRY_CONFIG = {
  'axios-retry': {
    retryCondition: (error: AxiosError) => error?.response?.status === 404 || error?.response?.status === 500,
    retries: 3,
  },
};
export const DEFAULT_AXIOS_RETRY_CONFIG = {
  retries: 0,
  retryDelay: (retryCount: number) => retryCount * RETRIES_DELAY_IN_MS,
};
