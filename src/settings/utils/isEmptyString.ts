import { EMPTY_STRING_PATTERN } from 'settings/validations/patterns';

export const isEmptyString = (str: string) => {
  const newStr = str.trim();

  return (typeof newStr === 'string' && EMPTY_STRING_PATTERN.test(newStr)) || newStr.length === 0;
};
