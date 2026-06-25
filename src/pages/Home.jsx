import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LaptopIcon from '@mui/icons-material/Laptop';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { WHY_CHOOSE_ITEMS, SPECIAL_FEATURES_STRIP, LATEST_UPDATES, TESTIMONIALS } from '../services/data';
import { SESSION_YEAR } from '../config/academicYear';
import Hero from  '../assets/Home.png'
import SEO from '../seo/SEO';
const ICON_MAP = {
  AutoAwesome: AutoAwesomeIcon, RecordVoiceOver: RecordVoiceOverIcon, Laptop: LaptopIcon,
  Handshake: HandshakeIcon, VerifiedUser: VerifiedUserIcon, School: SchoolIcon,
  Groups: GroupsIcon, SentimentVerySatisfied: SentimentVerySatisfiedIcon,
};

const TAG_COLORS = {
  Admission: { bg: '#fef3c7', color: '#92400e' }, Notice: { bg: '#e0e7ff', color: '#3730a3' },
  Event: { bg: '#d1fae5', color: '#065f46' }, Activity: { bg: '#ffe4e6', color: '#9f1239' },
};

/* ─── TESTIMONIAL 3D CAROUSEL WITH PULSE ─── */
function TestimonialCarousel() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index) => {
    const total = TESTIMONIALS.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isCenter = diff === 0;
    const isLeft = diff === -1;
    const isRight = diff === 1;
    const isFarLeft = diff === -2;
    const isFarRight = diff === 2;

    if (isXs) {
      if (isCenter) return { opacity: 1, transform: 'translateX(0) scale(1)', zIndex: 5, pointerEvents: 'auto' };
      if (isLeft) return { opacity: 0.4, transform: 'translateX(-85%) scale(0.8)', zIndex: 3, pointerEvents: 'none' };
      if (isRight) return { opacity: 0.4, transform: 'translateX(85%) scale(0.8)', zIndex: 3, pointerEvents: 'none' };
      return { opacity: 0, transform: 'translateX(0) scale(0.5)', zIndex: 0, pointerEvents: 'none' };
    }

    if (isCenter) return { opacity: 1, transform: 'translateX(0) scale(1)', zIndex: 5, pointerEvents: 'auto' };
    if (isLeft) return { opacity: 0.7, transform: 'translateX(-105%) scale(0.88)', zIndex: 3, pointerEvents: 'auto' };
    if (isRight) return { opacity: 0.7, transform: 'translateX(105%) scale(0.88)', zIndex: 3, pointerEvents: 'auto' };
    if (isFarLeft) return { opacity: 0.3, transform: 'translateX(-190%) scale(0.75)', zIndex: 1, pointerEvents: 'none' };
    if (isFarRight) return { opacity: 0.3, transform: 'translateX(190%) scale(0.75)', zIndex: 1, pointerEvents: 'none' };
    return { opacity: 0, transform: 'translateX(0) scale(0.5)', zIndex: 0, pointerEvents: 'none' };
  };

  return (
    <Box>
      {/* Pulse animation keyframes */}
     <style>{`
        @keyframes borderTravel {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes avatarGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.3); }
          50% { box-shadow: 0 0 0 8px rgba(244, 63, 94, 0); }
        }
      `}</style>

      {/* Carousel Stage */}
      <Box sx={{ position: 'relative', height: { xs: 380, sm: 400 }, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', mx: { xs: -2, sm: 0 } }}>

        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: { xs: 4, sm: 16, md: 40 },
            zIndex: 10,
            bgcolor: 'primary.main',
            color: '#fff',
            width: { xs: 36, sm: 44 },
            height: { xs: 36, sm: 44 },
            boxShadow: '0 4px 16px rgba(13,92,117,0.35)',
            '&:hover': { bgcolor: 'primary.dark', transform: 'scale(1.1)' },
            transition: '0.2s',
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Cards */}
       {TESTIMONIALS.map((t, index) => {
          const style = getCardStyle(index);
          const isActive = style.zIndex === 5;
          return (
            <Box
              key={t.id}
              onClick={() => setActiveIndex(index)}
              sx={{
                position: 'absolute',
                width: { xs: '80%', sm: '42%', md: '34%', lg: '30%' },
                opacity: style.opacity,
                transform: style.transform,
                zIndex: style.zIndex,
                pointerEvents: style.pointerEvents,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                borderRadius: '28px',
                p: isActive ? '3px' : '0px',
                overflow: 'hidden',
              }}
            >
              {/* Spinning gradient border - only on active card */}
              {isActive && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background:
                      'conic-gradient(from 0deg, transparent 0%, transparent 55%, #f43f5e 70%, #facc15 80%, #0d5c75 90%, transparent 100%)',
                    animation: 'borderTravel 3s linear infinite',
                    zIndex: 0,
                  }}
                />
              )}

              <Card
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  borderRadius: '24px',
                  border: isActive ? 'none' : '1px solid #e2e8f0',
                  boxShadow: isActive
                    ? '0 20px 50px rgba(244,63,94,0.15)'
                    : '0 4px 12px rgba(0,0,0,0.06)',
                  '&:hover': style.zIndex >= 3
                    ? { boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }
                    : {},
                }}
              >
                <Box sx={{ mt: 0.5 }}>
                  <Rating value={t.rating} readOnly size="small" sx={{ mb: 1.5, color: '#facc15' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      lineHeight: 1.8,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontSize: '0.85rem',
                    }}
                  >
                    "{t.content}"
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mt: 2.5,
                    pt: 2,
                    borderTop: '1px solid #f1f5f9',
                  }}
                >
                  <Avatar
                    src={t.image}
                    alt={t.parentName}
                    sx={{
                      width: 44,
                      height: 44,
                      border: isActive ? '2px solid' : '2px solid transparent',
                      borderColor: isActive ? 'secondary.main' : 'transparent',
                      animation: isActive ? 'avatarGlow 2s ease-in-out infinite' : 'none',
                      transition: 'border-color 0.4s',
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"Fredoka", sans-serif',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {t.parentName}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: '0.68rem' }}>
                      {t.childName}'s Parent ({t.childClass})
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.disabled', fontSize: '0.62rem', display: 'block' }}
                    >
                      {t.occupation}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          );
        })}

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: { xs: 4, sm: 16, md: 40 },
            zIndex: 10,
            bgcolor: 'primary.main',
            color: '#fff',
            width: { xs: 36, sm: 44 },
            height: { xs: 36, sm: 44 },
            boxShadow: '0 4px 16px rgba(13,92,117,0.35)',
            '&:hover': { bgcolor: 'primary.dark', transform: 'scale(1.1)' },
            transition: '0.2s',
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Dot Indicators */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
        {TESTIMONIALS.map((_, i) => (
          <Box
            key={i}
            onClick={() => setActiveIndex(i)}
            sx={{
              width: activeIndex === i ? 28 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor: activeIndex === i ? 'secondary.main' : '#cbd5e1',
              cursor: 'pointer',
              transition: 'all 0.4s',
              '&:hover': { bgcolor: activeIndex === i ? 'secondary.main' : '#94a3b8' },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ pt: 10 }}>

    <SEO
        title="Best Preschool & Primary School in Devarakonda"
        description="Little Hearts Kindergarten School – Premium preschool & primary school in Devarakonda, Nalgonda. Spoken English, digital classrooms, activity-based learning. Playgroup to Class 5. Admissions open!"
        path="/"
      />

      {/* ─── HERO ─── */}
      <Box sx={{ background: 'linear-gradient(to bottom, #e0f2fe, #fff1f2 40%, #fff)', py: { xs: 8, md: 12 }, px: 2, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <Chip icon={<FavoriteIcon sx={{ fontSize: 16, color: 'secondary.main' }} />} label="Enrollment Now " sx={{ bgcolor: '#ffe4e6', color: '#e11d48', fontWeight: 600, fontFamily: '"Fredoka", sans-serif', mb: 3, fontSize: '0.8rem' }} />
                <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main', lineHeight: 1.1, fontSize: { xs: '2.2rem', sm: '2.8rem', lg: '3.5rem' }, mb: 2 }}>
                  Little Hearts <br /><Box component="span" sx={{ color: 'secondary.main' }}>Kindergarten School</Box>
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 500, color: '#334155', fontStyle: 'italic', mb: 2 }}>"Little Hearts, Big Achievements."</Typography>
                <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: { xs: 'auto', lg: 0 }, mb: 4, lineHeight: 1.8 }}>
                  A premium childhood nurturing hub in Gandhi Nagar, Devarakonda. We blend activity-based methods, advanced visual materials, and standard phonic exercises to empower children to discover, speak, and excel with confidence.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <Button component={RouterLink} to="/admissions" variant="contained" color="secondary" size="large" endIcon={<ArrowForwardIcon />} sx={{ borderRadius: 3, px: 4, py: 1.5 }}>Apply for Admission</Button>
                  <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large" sx={{ borderRadius: 3, px: 4, py: 1.5 }}>Schedule Campus Visit</Button>
                </Box>
                <Grid container spacing={2} sx={{ mt: 4, maxWidth: 420, mx: { xs: 'auto', lg: 0 }, borderTop: '1px solid #e2e8f0', pt: 3 }}>
                  {[{ value: '8+', label: 'Childhood Features' }, { value: '1:15', label: 'Teaching Ratio' }, { value: 'Play-5th', label: 'Nurturing Levels' }].map((stat, i) => (
                    <Grid size={{ xs: 4 }} key={i} sx={{ textAlign: 'center' }}>
                      <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, fontSize: '1.5rem', color: i === 1 ? 'secondary.main' : 'primary.main' }}>{stat.value}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box sx={{ position: 'relative', maxWidth: 450, mx: 'auto' }}>
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#facc15', borderRadius: 6, transform: 'rotate(3deg)', opacity: 0.7 }} />
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'primary.main', borderRadius: 6, transform: 'rotate(-3deg)', opacity: 0.8 }} />
                <Paper sx={{ position: 'relative', p: 1, borderRadius: 6, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                  <Box component="img"  src={Hero} alt="Children learning together" sx={{ borderRadius: 5, width: '100%', height: { xs: 300, sm: 380 }, objectFit: 'cover', display: 'block' }} />

                </Paper>
                <Paper sx={{ position: 'absolute', top: -16, left: -16, px: 1.5, py: 1, borderRadius: 3, display: 'flex', alignItems: 'center', gap: 1, transform: 'rotate(-12deg)', boxShadow: 3 }}>
                  <Typography sx={{ fontSize: 20 }}>🎨</Typography>
                  <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#d97706' }}>Activity Class</Typography>
                </Paper>
                <Paper sx={{ position: 'absolute', bottom: -16, right: -8, px: 1.5, py: 1, borderRadius: 3, display: 'flex', alignItems: 'center', gap: 1, transform: 'rotate(6deg)', boxShadow: 3 }}>
                  <Typography sx={{ fontSize: 20 }}>🏆</Typography>
                  <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#059669' }}>Moral Character</Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── WELCOME ─── */}
      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Welcome to Little Hearts</Typography>
          <Typography variant="h3" sx={{ color: 'primary.main', mt: 1, mb: 2, fontSize: { xs: '1.8rem', sm: '2.2rem' } }}>The Cradle of Growth and Playful Wisdom</Typography>
          <Box sx={{ width: 80, height: 5, bgcolor: 'warning.main', mx: 'auto', borderRadius: 2, mb: 3 }} />
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
            At <strong>Little Hearts Kindergarten School</strong>, located in the peaceful surroundings of Gandhi Nagar, Devarakonda, we believe every child is born with an immense canvas of capacity. Our system bridges loving guidance with scientific activity-centric parameters. Playgroup, Nursery, LKG, UKG and Primary Grades (1st to 5th) are tutored with specialized cognitive tools to stimulate natural spoken confidence, emotional intelligence, and continuous creative joy.
          </Typography>
          <Button component={RouterLink} to="/about" endIcon={<ArrowForwardIcon />} sx={{ mt: 3, color: 'secondary.main', fontFamily: '"Fredoka", sans-serif', fontWeight: 600 }}>
            Read our full school outline & values
          </Button>
        </Container>
      </Box>

      {/* ─── FEATURES STRIP ─── */}
      <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: 3, borderTop: '4px solid #facc15', borderBottom: '4px solid #facc15' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Chip label="★ Premium campus highlights" sx={{ bgcolor: 'secondary.main', color: '#fff', fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: '0.75rem' }} />
            {SPECIAL_FEATURES_STRIP.map((item, i) => (
              <Chip key={i} label={item} variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.15)', bgcolor: 'rgba(255,255,255,0.08)', fontSize: '0.75rem' }} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ─── WHY CHOOSE US ─── */}
      <Box sx={{ py: 10, bgcolor: '#f8fafc', px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 2 }}>Our Parenting Strengths</Typography>
            <Typography variant="h3" sx={{ color: 'primary.main', mt: 1, mb: 1, fontSize: { xs: '1.8rem', sm: '2.2rem' } }}>Why Choose Little Hearts School?</Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>We focus on holistic foundational grooming that embeds confidence, fluency, and values into everyday interactions.</Typography>
          </Box>
          <Grid container spacing={3}>
            {WHY_CHOOSE_ITEMS.map((item, index) => {
              const IconComp = ICON_MAP[item.muiIcon] || AutoAwesomeIcon;
              return (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                  <Card sx={{ height: '100%', p: 3, transition: 'all 0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)' } }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <IconComp sx={{ color: item.color, fontSize: 26 }} />
                    </Box>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 1, fontSize: '1.05rem' }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.description}</Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ─── UPDATES & ADMISSIONS SIDEBAR ─── */}
      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                <Typography sx={{ fontSize: 28 }}>📢</Typography>
                <Box>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.8rem' } }}>Latest Updates & Announcements</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Live feed from our administrative wing</Typography>
                </Box>
              </Box>
              <Grid container spacing={3}>
                {LATEST_UPDATES.map((update) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={update.id}>
                    <Card sx={{ p: 3, height: '100%', transition: 'all 0.2s', '&:hover': { boxShadow: 6 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                        <Chip label={update.tag} size="small" sx={{ bgcolor: TAG_COLORS[update.tag]?.bg, color: TAG_COLORS[update.tag]?.color, fontWeight: 700, fontSize: '0.65rem', letterSpacing: 1, textTransform: 'uppercase' }} />
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>{update.date}</Typography>
                      </Box>
                      <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: '#1e293b', mb: 1 }}>{update.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{update.content}</Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Paper sx={{ mt: 4, p: 4, borderRadius: 4, bgcolor: '#e0f2fe', border: '1px solid #bae6fd', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
                <Box>
                  <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: 'primary.main', fontSize: '1.1rem' }}>Planning to visit our campus?</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Meet our principal, tour the digital smart rooms and check safety facilities.</Typography>
                </Box>
                <Button component={RouterLink} to="/contact" variant="contained" color="primary" sx={{ borderRadius: 3, flexShrink: 0 }}>Book Campus Visit</Button>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper sx={{ background: 'linear-gradient(135deg, #0d5c75, #1e293b)', color: '#fff', p: 4, borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)' }} />
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Chip label={`Session ${SESSION_YEAR} Active`} size="small"sx={{ bgcolor: '#facc15', color: '#1e293b', fontWeight: 700, fontFamily: '"Fredoka", sans-serif', mb: 2, fontSize: '0.7rem', letterSpacing: 1, textTransform: 'uppercase' }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontSize: '1.6rem' }}>Admissions Open</Typography>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.8, mb: 3 }}>We are open for new child interactions. Early years represent the optimal space to construct spoken foundations and structural cognitive habits.</Typography>
                  {['Playgroup & Nursery (2-4 Years)', 'LKG & UKG Phonics Preparation', 'Primary Schooling (Class 1-5)', 'Integrated Bus Services available'].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: '#34d399' }} />
                      <Typography variant="caption" sx={{ color: '#e2e8f0' }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <Button component={RouterLink} to="/admissions" fullWidth variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: '#facc15', color: '#1e293b', fontWeight: 700, borderRadius: 3, py: 1.5, '&:hover': { bgcolor: '#fbbf24' } }}>Online Enquiry Form</Button>
                  <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1.5, color: '#94a3b8' }}>Need helpline support? Call <strong>9441513977</strong></Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── TESTIMONIALS CAROUSEL ─── */}
      <Box sx={{ py: 10, bgcolor: '#f8fafc', px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Parental Voices</Typography>
            <Typography variant="h3" sx={{ color: 'primary.main', mt: 1, mb: 1, fontSize: { xs: '1.8rem', sm: '2.2rem' } }}>Words from Little Hearts Parents</Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Nothing proves our dedication more than the trust and smile of local parents from Devarakonda.
            </Typography>
          </Box>
          <TestimonialCarousel />
        </Container>
      </Box>

      {/* ─── CTA BANNER ─── */}
      <Box sx={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)', color: '#fff', py: 10, px: 2, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -48, left: -48, width: 120, height: 120, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.06)' }} />
        <Box sx={{ position: 'absolute', bottom: -48, right: -48, width: 160, height: 160, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.06)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FavoriteIcon sx={{ fontSize: 48, color: '#fde047', mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.6rem', sm: '2.2rem' } }}>"A Caring Place Where Every Child Learns, Grows & Shines!"</Typography>
          <Typography sx={{ color: '#fecdd3', mb: 4, maxWidth: 600, mx: 'auto' }}>Give your child the ideal start. Experience our modern activity rooms, fluent English spoken exercises, and passionate teachers in Devarakonda.</Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Button component={RouterLink} to="/admissions" variant="contained" sx={{ bgcolor: '#0f172a', color: '#fff', borderRadius: 3, px: 4, py: 1.5, fontWeight: 700, '&:hover': { bgcolor: '#1e293b' } }}>Enroll Online</Button>
            <Button component={RouterLink} to="/contact" variant="contained" sx={{ bgcolor: '#fff', color: 'secondary.main', borderRadius: 3, px: 4, py: 1.5, fontWeight: 700, '&:hover': { bgcolor: '#f1f5f9' } }}>Consult School Map</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}