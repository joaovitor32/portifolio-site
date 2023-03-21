import { isEmptyString } from 'settings/utils/isEmptyString';

import { EMAIL_PATTERN } from '../patterns';

export const isValidEmailAddress = (email: string) => {
  if (!email || isEmptyString(email)) return false;

  return EMAIL_PATTERN.test(email);
};
