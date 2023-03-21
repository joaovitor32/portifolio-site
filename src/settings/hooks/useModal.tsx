import { useState, useCallback } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, handleClose, handleOpen };
};
