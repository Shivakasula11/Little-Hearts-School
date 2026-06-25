import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SEO from '../seo/SEO';

export default function NotFound() {
  return (
    <Box sx={{ pt: 16, pb: 12, minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist on Little Hearts Kindergarten School."
        path="/404"
      />
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 700,
            color: 'secondary.main',
            fontSize: { xs: '5rem', sm: '7rem' },
            lineHeight: 1,
            mb: 1,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', mb: 2, fontSize: { xs: '1.5rem', sm: '2rem' } }}
        >
          Oops! Page Not Found
        </Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', mb: 4 }}>
          The page you are looking for may have been moved or no longer exists. Let us guide you back home.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="secondary"
          startIcon={<HomeIcon />}
          sx={{ borderRadius: 3, py: 1.2, px: 3 }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
}