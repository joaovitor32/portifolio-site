import React from 'react';

import { Box } from '@mui/material';

import { ContactCard } from 'molecules/ContactCard';

import styles from './styles';

const transitionTimes = {
  first: 0.25,
  second: 0.5,
  third: 0.75,
};

export const ContactContent = () => (
  <Box sx={styles.contactCardsContainer}>
    <ContactCard
      transitionTime={transitionTimes.first}
      icon="material-symbols:phone-android"
      title="Telefone"
      info="+55 22 99732-7953"
    />
    <ContactCard
      transitionTime={transitionTimes.second}
      icon="ic:baseline-email"
      title="Email"
      info="joaovitormunizlopes@gmail.com"
    />
    <ContactCard
      transitionTime={transitionTimes.third}
      icon="material-symbols:house"
      title="Endereço"
      info="Rua José Aristides Pereira. Solares, Nova Friburgo e N° 13. CEP: 28630-344 - Rio de Janeiro"
    />
  </Box>
);
