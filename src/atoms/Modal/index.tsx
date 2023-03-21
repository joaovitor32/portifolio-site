import React, { ReactNode } from 'react';

import { Box } from '@mui/material';
import ModalMUI from '@mui/material/Modal';

import { useLockedBody } from 'settings/hooks/useLockedBody';

import styles from './styles';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  handleClose: (data: boolean) => void;
}

const Modal = ({ children, open, handleClose }: ModalProps) => {
  useLockedBody(open, 'root');

  return (
    <ModalMUI open={open} onClose={handleClose}>
      <Box sx={styles.modal}>{children}</Box>
    </ModalMUI>
  );
};

export { Modal };
