import React from 'react';

import { Box, Typography } from '@mui/material';

import * as Atoms from 'atoms';

import { useMainForm } from 'organisms/MailForm/providers/useMainForm';
import data from 'settings/data/config.json';

import styles from './styles';

interface MailFormProps {
  open: boolean;
  handleClose: () => any;
}

export const MailForm = ({ open, handleClose }: MailFormProps) => {
  const { mainForm } = useMainForm();

  const { onSubmit, handleSubmit } = mainForm;
  const { useName, useEmail, usePhone } = mainForm.inputs;
  return (
    <Atoms.Modal open={open} handleClose={() => handleClose()}>
      <Atoms.CloseButton onClick={() => handleClose()} sx={styles.closeButton} />
      <Box sx={styles.container}>
        <Atoms.FormProvider sx={styles.formProvider} methods={mainForm} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.formTitle}>{data.form.title} </Typography>
          </Box>
          <Box sx={styles.formContent}>
            <Atoms.RHFTextField
              placeholder={data.form.inputs.name.placeholder}
              type={data.form.inputs.name.name}
              registerField={useName}
              error={!!mainForm.formState.errors.name}
            />

            <Atoms.RHFTextField
              placeholder={data.form.inputs.email.placeholder}
              type={data.form.inputs.email.name}
              error={!!mainForm.formState.errors.email}
              registerField={useEmail}
            />
            <Atoms.RHFTextField
              placeholder={data.form.inputs.phone.placeholder}
              type={data.form.inputs.phone.name}
              error={!!mainForm.formState.errors.phone}
              registerField={usePhone}
            />
            <Atoms.Button type="submit" title={data.form.button} />
          </Box>
        </Atoms.FormProvider>
      </Box>
    </Atoms.Modal>
  );
};
