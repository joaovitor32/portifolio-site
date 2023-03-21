import { useCallback } from 'react';

import data from 'settings/data/config.json';
import { maskPhoneNumber } from 'settings/masks/phoneNumber';

import { limitString } from 'settings/utils/limitString';
import { isValidEmailAddress } from 'settings/validations/email';
import { validatePhoneNumber } from 'settings/validations/phoneNumber';

export const useFormRegisters = (form: any) => {
  const useName = useCallback(
    () => ({
      ...form.register(data.form.inputs.name.name, {
        validate: (value: string) => value.length > 0,
      }),
    }),
    [form]
  );

  const usePhone = useCallback(
    () => ({
      ...form.register(data.form.inputs.phone.name, {
        maxLength: { value: 16 },
        validate: (value: string) => validatePhoneNumber(value),
      }),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = maskPhoneNumber(limitString(e.target.value, 16));
        e.target.value = value;
        return e;
      },
    }),
    [form]
  );

  const useEmail = useCallback(
    () => ({
      ...form.register(data.form.inputs.email.name, {
        validate: (value: string) => isValidEmailAddress(value),
      }),
    }),
    [form]
  );

  return {
    registers: {
      useName,
      usePhone,
      useEmail,
    },
    form,
  };
};
