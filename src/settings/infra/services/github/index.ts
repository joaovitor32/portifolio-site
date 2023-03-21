import * as Sentry from '@sentry/nextjs';
import { AxiosError } from 'axios';

import { api } from 'settings/infra/adapter';
import { RepositoryInfoListResponse } from 'settings/infra/types';

export const fetchRepositories = async () => {
  try {
    const { data } = await api.get<RepositoryInfoListResponse>(`/users/${process.env.NEXT_PUBLIC_USERNAME}/repos`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN}` || '',
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (err) {
    const { response } = err as unknown as AxiosError<Error>;
    Sentry.captureException(response?.data.message || err);
    return {
      ok: false,
      data: null,
      error: response?.data.message,
      status: response?.status,
    };
  }
};
