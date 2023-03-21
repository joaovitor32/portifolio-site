import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useResponsive = (
  query: 'up' | 'down' | 'between' | 'only',
  key: Breakpoint,
  start: number | Breakpoint = 0,
  end: number | Breakpoint = 0
) => {
  const theme = useTheme();

  const isMatchMediaUp = useMediaQuery(theme.breakpoints.up(key));

  const isMatchMediaDown = useMediaQuery(theme.breakpoints.down(key));

  const isMatchMediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const isMatchMediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === 'up') {
    return isMatchMediaUp;
  }

  if (query === 'down') {
    return isMatchMediaDown;
  }

  if (query === 'between') {
    return isMatchMediaBetween;
  }

  if (query === 'only') {
    return isMatchMediaOnly;
  }

  return false;
};
