import { Stack } from '@mui/material';

import * as Atoms from 'atoms';

export const HeaderStack = () => (
  <Stack direction="row" spacing={2}>
    <Atoms.HeaderButton title="About" />
    <Atoms.HeaderButton title="Projects" />
    <Atoms.HeaderButton title="Contact" />
  </Stack>
);
