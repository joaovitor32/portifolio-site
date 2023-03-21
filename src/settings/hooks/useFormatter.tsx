import { useCallback } from 'react';

export const useFormatter = () => {
  const capitalizeFirstLetter = useCallback((str: string) => str.charAt(0).toUpperCase() + str.slice(1), []);

  const removeWhiteSpaces = useCallback((str: string) => str.replaceAll('-', ' '), []);

  const normalize = useCallback((str: string) => removeWhiteSpaces(capitalizeFirstLetter(str)), []);

  return { normalize, removeWhiteSpaces, capitalizeFirstLetter };
};
