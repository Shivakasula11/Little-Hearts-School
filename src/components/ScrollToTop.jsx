import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        color="secondary"
        size="medium"
        aria-label="Scroll to top"
        sx={{ position: 'fixed', bottom: 96, right: 24, zIndex: 40, boxShadow: '0 4px 14px rgba(244,63,94,0.3)' }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}