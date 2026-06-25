import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import Logo from '../assets/logo.png'

const QUICK_LINKS = [
  { label: 'Home Dashboard', path: '/' },
  { label: 'School Profile & Mission', path: '/about' },
  { label: 'Classes & Programs', path: '/programs' },
  { label: 'Admission Enquiry', path: '/admissions' },
  { label: 'Campus Activity Gallery', path: '/gallery' },
  { label: 'Get In Touch', path: '/contact' },
];

const SOCIAL_ICONS = [
  { icon: <FacebookIcon fontSize="small" />, href: 'https://www.facebook.com/share/1An5aWgr2F/', label: 'Facebook' },
  { icon: <InstagramIcon fontSize="small" />, href: 'https://www.instagram.com/littlehearts_dvk?utm_source=qr&igsh=MXZwMDdqaGdldW05Zw%3D%3D', label: 'Instagram' },
  { icon: <LinkedinIcon  fontSize="small" />, href: 'https://www.linkedin.com/in/little-hearts-kinder-garten-school-09246b418/', label: 'Linkedin' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: '#0f172a', color: '#94a3b8', borderTop: '8px solid #0d5c75', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>

         {/* Column 1: School Bio */}
<Grid size={{ xs: 12, md: 6, lg: 3 }}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
    <Box
      component="img"
      src={Logo}
      alt="Little Hearts Logo"
      sx={{ width: 40, height: 40, objectFit: 'cover',borderRadius:'50px' }}
    />
    <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem', lineHeight: 1.2 }}>
      Little Hearts<br />Kindergarten
    </Typography>
  </Box>
  <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1, fontStyle: 'italic' }}>
    "A Caring Place Where Every Child Learns, Grows & Shines!"
  </Typography>
  <Typography variant="caption" sx={{ color: '#64748b', lineHeight: 1.6, display: 'block' }}>
    Serving our community in Devarakonda with modern activity-based tutoring, Spoken English standards, and digital classrooms.
  </Typography>
  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
    {SOCIAL_ICONS.map((s) => (
      <IconButton key={s.label} component="a" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} sx={{ bgcolor: '#1e293b', color: '#94a3b8', '&:hover': { bgcolor: 'secondary.main', color: '#fff' }, transition: '0.2s' }} size="small">
        {s.icon}
      </IconButton>
    ))}
  </Box>
</Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: 1, mb: 3, pb: 1, borderBottom: '1px solid #1e293b', fontSize: '0.85rem' }}>Quick Navigation</Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {QUICK_LINKS.map((link) => (
                <Box component="li" key={link.path} sx={{ mb: 1.5 }}>
                  <Link component={RouterLink} to={link.path} underline="hover" sx={{ color: '#94a3b8', fontSize: '0.85rem', '&:hover': { color: '#fb7185' }, transition: '0.2s' }}>{link.label}</Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Timings */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: 1, mb: 3, pb: 1, borderBottom: '1px solid #1e293b', fontSize: '0.85rem' }}>School Hours</Typography>
            {[
              { day: 'Monday - Saturday', time: '9:15 to 4:30 PM', note: null },
              { day: 'Lunch Time', time: '12:30 to 2:00', note: '4th Saturday: PTM Engagement' },
              { day: 'Sunday', time: 'Holiday', note: null },
            ].map((item) => (
              <Box key={item.day} sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                <AccessTimeIcon sx={{ fontSize: 20, color: item.day === 'Sunday' ? '#64748b' : 'secondary.main', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: item.day === 'Sunday' ? '#64748b' : '#e2e8f0' }}>{item.day}</Typography>
                  <Typography variant="caption" sx={{ color: item.day === 'Sunday' ? '#475569' : '#94a3b8' }}>{item.time}</Typography>
                  {item.note && <Typography variant="caption" sx={{ display: 'block', color: '#fbbf24', fontSize: 10 }}>{item.note}</Typography>}
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Column 4: Contact */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: 1, mb: 3, pb: 1, borderBottom: '1px solid #1e293b', fontSize: '0.85rem' }}>Contact Info</Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
              <LocationOnIcon sx={{ fontSize: 20, color: '#38bdf8', mt: 0.3 }} />
              <Typography variant="caption" sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
                H.NO 20-105, Gandhi Nagar,<br />Devarakonda, Nalgonda District,<br />Telangana - 508248
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
              <PhoneIcon sx={{ fontSize: 20, color: '#38bdf8' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {['9441513977', '7569354292', '8125732746'].map((ph) => (
                  <Link key={ph} href={`tel:${ph}`} underline="hover" sx={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace', '&:hover': { color: '#fff' } }}>{ph}</Link>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <EmailIcon sx={{ fontSize: 20, color: '#38bdf8' }} />
              <Link href="mailto:Littleheartskg26@gmail.com" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.75rem', wordBreak: 'break-all', '&:hover': { color: '#fff' } }}>Littleheartskg26@gmail.com</Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#1e293b', mt: 6, mb: 4 }} />
        <Typography align="center" variant="caption" sx={{ color: '#475569', display: 'block' }}>© {currentYear} Little Hearts Kindergarten School. All rights reserved.</Typography>
        <Typography align="center" variant="caption" sx={{ color: '#475569', display: 'block', mt: 0.5 }}>Located in Gandhi Nagar, Devarakonda, Nalgonda District.</Typography>
      </Container>
    </Box>
  );
}