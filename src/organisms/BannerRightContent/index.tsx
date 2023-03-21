import React from 'react';

import { Box } from '@mui/material';

import * as Atoms from 'atoms';

import * as Organisms from 'organisms';

import data from 'settings/data/config.json';

import { useModal } from 'settings/hooks/useModal';

import styles from './styles';

interface BannerRightContentProps {
  isVisible: boolean;
}

export const BannerRightContent = ({ isVisible }: BannerRightContentProps) => {
  const { open, handleClose, handleOpen } = useModal();

  return (
    <>
      <Box sx={styles.rightContainer}>
        <Organisms.MailForm open={open} handleClose={handleClose} />
        <Organisms.BannerContent isVisible={isVisible} />
        <Atoms.AnimationBottomToTop duration={1} isVisible={isVisible}>
          <Atoms.Button onClick={() => handleOpen()} title={data.banner.button} />
        </Atoms.AnimationBottomToTop>
      </Box>
    </>
  );
};
