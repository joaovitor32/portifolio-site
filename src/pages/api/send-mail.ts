/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AwsSdk from 'aws-sdk';

import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, phone } = req.body;
    const { publicRuntimeConfig } = getConfig();
    const { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_REGION, TO_MAIL } = publicRuntimeConfig;

    AwsSdk.config.update({
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_KEY,
      region: AWS_REGION,
    });

    const transporter = nodemailer.createTransport({
      SES: new AwsSdk.SES({
        apiVersion: '2010-12-01',
      }),
    });

    await transporter.sendMail({
      from: email,
      to: TO_MAIL,
      subject: 'Tentativa de contato',
      text: `Pessoa com nome ${name} e telefone ${phone} entrou em contato.`,
    });
  } catch (err) {
    const error = err as unknown as { message: string };
    console.log(err);
    return res.status(400).json({ ok: false, status: 400, error: { message: error.message }, data: null });
  }
}
