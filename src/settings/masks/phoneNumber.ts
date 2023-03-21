import { PHONE_NUMBER_MASK_PATTERN } from 'settings/validations/patterns';
export const maskPhoneNumber = (phone: string) =>
  phone.replace(/\D/g, '').replace(PHONE_NUMBER_MASK_PATTERN, '($1) $2 $3-$4');
