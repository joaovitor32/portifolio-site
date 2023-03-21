import React from 'react';

import * as Molecules from 'molecules';

import data from 'settings/data/config.json';

import styles from './styles';

interface BannerContentProps {
  isVisible?: boolean;
}

export const BannerContent = ({ isVisible }: BannerContentProps) => (
  <>
    {/** Transition -> https://www.framer.com/motion/transition/ */}
    <Molecules.BannerText sx={styles.title} isVisible={isVisible} duration={0.3} text={data.banner.title} />
    <Molecules.BannerText sx={styles.name} isVisible={isVisible} duration={0.4} text={data.banner.name} />
    <Molecules.BannerText sx={styles.mainText} isVisible={isVisible} duration={0.5} text={data.banner.mainText} />
  </>
);
