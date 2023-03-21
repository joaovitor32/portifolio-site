import axios from 'axios';

interface MailProps {
  name: string;
  email: string;
  phone: string;
}

export const sendEmail = async (payload: MailProps) => {
  try {
    const { data } = await axios.post('/api/send-mail', payload);

    if (data.status !== 200) {
      throw new Error(data.message);
    }

    return data;
  } catch (err: any) {
    const { response } = err;

    return {
      ok: false,
      error: response?.data?.message,
      status: response?.status,
    };
  }
};
