import { ReactNode } from 'react';

import { SxProps } from '@mui/material/styles';

import { FormProvider as Form } from 'react-hook-form';

interface FormProviderProps {
  children: ReactNode;
  methods?: object;
  onSubmit?: (data: any) => void;
  sx?: SxProps;
}

const FormProvider = ({ children, sx, onSubmit, methods, ...other }: FormProviderProps) => (
  <Form {...methods}>
    <form style={sx} onSubmit={onSubmit} {...other}>
      {children}
    </form>
  </Form>
);

export { FormProvider };
