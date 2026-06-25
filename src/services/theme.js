import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d5c75',
      light: '#e0f2fe',
      dark: '#093d4f',
    },
    secondary: {
      main: '#f43f5e',
      light: '#fff1f2',
      dark: '#e11d48',
    },
    warning: {
      main: '#facc15',
      light: '#fef9c3',
    },
    success: {
      main: '#34d399',
      light: '#ecfdf5',
    },
    info: {
      main: '#38bdf8',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Fredoka", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Fredoka", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Fredoka", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Fredoka", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
    subtitle1: { fontFamily: '"Fredoka", sans-serif', fontWeight: 500 },
    subtitle2: { fontFamily: '"Fredoka", sans-serif', fontWeight: 500 },
    button: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600, textTransform: 'none' },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '0.9rem',
        },
        containedPrimary: {
          boxShadow: '0 4px 14px rgba(13, 92, 117, 0.25)',
          '&:hover': { boxShadow: '0 6px 20px rgba(13, 92, 117, 0.35)' },
        },
        containedSecondary: {
          boxShadow: '0 4px 14px rgba(244, 63, 94, 0.25)',
          '&:hover': { boxShadow: '0 6px 20px rgba(244, 63, 94, 0.35)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Fredoka", sans-serif',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;