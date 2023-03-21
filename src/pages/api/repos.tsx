/* eslint-disable no-restricted-syntax */
import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchRepositories } from 'settings/infra/services/github';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await fetchRepositories();

    if (error || !data) {
      throw new Error(error);
    }

    return res.status(200).json({
      ok: true,
      data,
      status: 200,
      error,
    });
  } catch (error) {
    const hasError = Object.values(error || {}).length > 0;

    return res.status(404).json({
      ok: false,
      status: 404,
      data: {
        data: null,
      },
      error: hasError ? error : 'Respositórios não encontrado',
    });
  }
}

export default handler;
