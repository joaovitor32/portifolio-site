import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

import { sendEmail } from 'settings/infra/services/email';

import { useFormRegisters } from '../register/useFormRegister';

interface MailProps {
  name: string;
  email: string;
  phone: string;
}

export const useMainForm = () => {
  const form = useForm({});

  const {
    registers: { useName, usePhone, useEmail },
  } = useFormRegisters(form);

  const onSubmit = async (data: MailProps) => {
    try {
      const response = await sendEmail(data);

      if (response?.ok === false) {
        throw new Error();
      }
      toast.success('E-mail enviado. Entraremos em contato!');
    } catch (err) {
      toast.error('Falha ao enviar o e-mail. Tente novamente em alguns minutos.');
      console.log('Falha ao enviar e-mail', err);
    } finally {
      //form.reset();
    }
  };

  return {
    mainForm: {
      onSubmit,
      inputs: {
        useName,
        usePhone,
        useEmail,
      },
      ...form,
    },
  };
};
