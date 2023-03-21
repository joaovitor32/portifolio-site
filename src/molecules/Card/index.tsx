import React from 'react';

import { Box, Link } from '@mui/material';

import * as Molecules from 'molecules';

import { useElementIsVisible } from 'settings/hooks/useElementIsVisible';

import styles from './styles';

interface CardProps {
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  description: string;
  position: number;
  forks_count: number;
}

interface BodyProps {
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  description: string;
  name: string;
  forks_count: number;
}

const Body = ({ description, stargazers_count, language, html_url, name, forks_count }: BodyProps) => (
  <Box sx={styles.body}>
    <Molecules.CardHeader name={name} description={description} language={language} />
    <Box sx={styles.innerContainer}>
      <Molecules.IconContent count={stargazers_count} icon={'material-symbols:star'} />
      <Molecules.IconContent count={forks_count} icon={'icon-park-solid:fork'} />

      <Link href={html_url} target="_blank">
        <Molecules.IconContent icon={'ph:link-simple-bold'} />
      </Link>
    </Box>
  </Box>
);

export const Card = ({ position, ...rest }: CardProps) => {
  const { newRef, isVisible } = useElementIsVisible();
  return (
    <Box ref={newRef} sx={styles.card({ position, trigger: isVisible })}>
      <Body {...rest} />
    </Box>
  );
};
