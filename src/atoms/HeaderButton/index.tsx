import { Button, Typography } from '@mui/material';

import styles from './styles';

interface HeaderButtonProps {
  title: string;
}

export const HeaderButton = ({ title }: HeaderButtonProps) => (
  <Button sx={styles.headerButton}>
    <Typography sx={styles.headerButtonTitle}>{title}</Typography>
  </Button>
);
