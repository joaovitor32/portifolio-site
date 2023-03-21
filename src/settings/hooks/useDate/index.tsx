import { useCallback } from 'react';

export const useDate = () => {
  const getYear = useCallback(() => new Date().getFullYear(), []);

  return { getYear };
};
