import { useState, useEffect } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Logo from '../assets/logo.png'
import { SESSION_YEAR } from '../config/academicYear';
const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 3 : 0}
      sx={{
        bgcolor: isScrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid #fff1f2',
        transition: 'all 0.3s',
      }}
    >
      <Toolbar sx={{ maxWidth: 1280, width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, py: isScrolled ? 0.5 : 1 }}>
        {/* Logo */}
        <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', flexShrink: 0 }}>
          <Box
            component="img"
            src={Logo}
            alt="Little Hearts Logo"
            sx={{
              width: 52,
              height: 52,
              borderRadius: '50px',
              objectFit: 'contain',
              boxShadow: '0 4px 12px rgba(244,63,94,0.25)',
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: 'primary.main', lineHeight: 1.1, fontSize: { xs: '1.1rem', sm: '1.3rem' } }}>
              Little Hearts
            </Typography>
            <Typography sx={{ fontSize: 9, letterSpacing: 2, color: 'text.secondary', fontFamily: 'monospace', textTransform: 'uppercase', mt: -0.3 }}>
              Kindergarten School
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
          {NAV_LINKS.map((link) => (
            <Button
              key={link.path}
              component={NavLink}
              to={link.path}
              sx={{
                borderRadius: 20,
                px: 2.5,
                py: 1,
                fontSize: '0.85rem',
                fontFamily: '"Fredoka", sans-serif',
                fontWeight: 500,
                color: 'primary.main',
                '&:hover': { bgcolor: '#fff1f2', color: 'secondary.main' },
                '&.active': { bgcolor: 'secondary.main', color: '#fff', boxShadow: '0 2px 8px rgba(244,63,94,0.2)' },
              }}
            >
              {link.name}
            </Button>
          ))}

          <Chip
            component={RouterLink}
            to="/admissions"
            clickable
            icon={<FiberManualRecordIcon sx={{ fontSize: 10, color: 'secondary.main', animation: 'pulse 1.5s infinite' }} />}
           label={`Admissions Open ${SESSION_YEAR}`}
            sx={{
              ml: 2,
              background: 'linear-gradient(135deg, #facc15, #f97316)',
              color: '#1e293b',
              fontWeight: 700,
              fontFamily: '"Fredoka", sans-serif',
              fontSize: '0.7rem',
              letterSpacing: 1,
              textTransform: 'uppercase',
              boxShadow: '0 3px 10px rgba(250,204,21,0.3)',
              '&:hover': { transform: 'scale(1.03)' },
              transition: 'transform 0.2s',
            }}
          />
        </Box>

        {/* Mobile: Admissions pill + Hamburger */}
        <Box sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center', gap: 1 }}>
          <Chip
            component={RouterLink}
            to="/admissions"
            clickable
            size="small"
            icon={<FiberManualRecordIcon sx={{ fontSize: 8, color: 'secondary.main' }} />}
            label="Admissions"
            sx={{
              bgcolor: '#facc15',
              color: '#1e293b',
              fontWeight: 700,
              fontFamily: '"Fredoka", sans-serif',
              fontSize: '0.6rem',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          />
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'primary.main' }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: 280, pt: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link.path}
              component={NavLink}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                mx: 2,
                borderRadius: 3,
                mb: 0.5,
                '&.active': { bgcolor: 'secondary.main', color: '#fff' },
              }}
            >
              <ListItemText primary={link.name} primaryTypographyProps={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 500 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ px: 2 }}>
          <Button
            component={RouterLink}
            to="/admissions"
            onClick={() => setDrawerOpen(false)}
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<SchoolIcon />}
            sx={{ borderRadius: 3, py: 1.5 }}
          >
            Apply for Admission
          </Button>
        </Box>
      </Drawer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </AppBar>
  );
}