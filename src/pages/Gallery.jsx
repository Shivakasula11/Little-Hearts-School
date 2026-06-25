import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CollectionsIcon from '@mui/icons-material/Collections';
import { GALLERY_ITEMS } from '../services/data';
import SEO from '../seo/SEO';

const CATEGORIES = ['All', 'Classrooms', 'Activities', 'Events', 'Sports'];

export default function Gallery() {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [imgIndex, setImgIndex] = useState(null);

  const selectedCategory = CATEGORIES[tabIndex];
  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const albumImages = activeAlbum?.images || (activeAlbum ? [activeAlbum.image] : []);

  const handlePrev = () =>
    setImgIndex((prev) => (prev === 0 ? albumImages.length - 1 : prev - 1));
  const handleNext = () =>
    setImgIndex((prev) => (prev === albumImages.length - 1 ? 0 : prev + 1));

  const handleCardClick = (item) => {
    setActiveAlbum(item);
    setImgIndex(0);
  };

  const closeLightbox = () => {
    setActiveAlbum(null);
    setImgIndex(null);
  };

  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Box
        sx={{
          background: 'linear-gradient(to right, rgba(224,242,254,0.6), rgba(255,241,242,0.5))',
          py: { xs: 6, md: 8 },
          px: 2,
          mb: 6,
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>
            Our Visual Memories
          </Typography>
          <Typography variant="h3" sx={{ color: 'primary.main', mt: 1, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>
            Campus Activity Gallery
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mt: 2 }}>
            Glimpses of daily life, hands-on scientific projects, storytelling and vibrant sports races that frame our children's learning.
          </Typography>
        </Container>
      </Box>

      <SEO
        title="Campus Gallery – Photos & Activities"
        description="See photos of Little Hearts Kindergarten School's classrooms, activities, sports events, and celebrations in Devarakonda. Digital classrooms, play areas, and more."
        path="/gallery"
      />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={tabIndex}
            onChange={(_, v) => {
              setTabIndex(v);
              closeLightbox();
            }}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': { borderRadius: 20, minHeight: 40, fontFamily: '"Fredoka", sans-serif', fontWeight: 500, textTransform: 'none', mx: 0.5 },
              '& .Mui-selected': { bgcolor: 'secondary.main', color: '#fff !important' },
              '& .MuiTabs-indicator': { display: 'none' },
            }}
          >
            {CATEGORIES.map((cat) => (
              <Tab key={cat} label={cat} sx={{ bgcolor: '#f8fafc', '&:hover': { bgcolor: '#f1f5f9' } }} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {filteredItems.map((item) => {
            const photoCount = item.images ? item.images.length : 1;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={item.id}>
                <Card
                  onClick={() => handleCardClick(item)}
                  sx={{ cursor: 'pointer', transition: 'all 0.3s', '&:hover': { boxShadow: 8 }, '&:hover .zoom-overlay': { opacity: 1 } }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{ height: { xs: 200, sm: 220 }, objectFit: 'cover', transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.05)' } }}
                      loading="lazy"
                    />
                    <Box
                      className="zoom-overlay"
                      sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(15,23,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}
                    >
                      <Box sx={{ bgcolor: 'rgba(255,255,255,0.95)', p: 1.5, borderRadius: '50%' }}>
                        <CollectionsIcon sx={{ color: 'secondary.main' }} />
                      </Box>
                    </Box>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{ position: 'absolute', top: 12, left: 12, bgcolor: 'primary.main', color: '#fff', fontWeight: 600, fontSize: '0.6rem', letterSpacing: 1, textTransform: 'uppercase' }}
                    />
                    <Chip
                      icon={<CollectionsIcon sx={{ color: '#fff !important', fontSize: 14 }} />}
                      label={`${photoCount} photo${photoCount > 1 ? 's' : ''}`}
                      size="small"
                      sx={{
                        position: 'absolute', bottom: 10, right: 10,
                        bgcolor: 'rgba(15,23,42,0.7)', color: '#fff', fontWeight: 600, fontSize: '0.6rem',
                        backdropFilter: 'blur(4px)', '& .MuiChip-icon': { ml: 0.5 },
                      }}
                    />
                  </Box>
                  <CardContent sx={{ py: 1.5, px: 2 }}>
                    <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: '#1e293b', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {filteredItems.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10, bgcolor: '#f8fafc', borderRadius: 4, border: '2px dashed #e2e8f0', mt: 2 }}>
            <Typography sx={{ fontSize: 40, mb: 1 }}>📸</Typography>
            <Typography sx={{ fontFamily: '"Fredoka", sans-serif', color: 'text.secondary' }}>No photos listed in this category yet.</Typography>
          </Box>
        )}
      </Container>

      {/* ── Unified Lightbox — same for all categories ── */}
      <Dialog
        open={activeAlbum !== null && imgIndex !== null}
        onClose={closeLightbox}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              bgcolor: '#0f172a',
              borderRadius: 4,
              overflow: 'hidden',
              maxHeight: '95vh',
              m: { xs: 1, sm: 2 },
            },
          },
        }}
      >
        {activeAlbum && imgIndex !== null && (
          <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', maxHeight: '95vh' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 1.5, flexShrink: 0, zIndex: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Chip
                  label={activeAlbum.category}
                  size="small"
                  sx={{ bgcolor: 'rgba(244,63,94,0.15)', color: 'secondary.main', fontWeight: 600, fontSize: '0.65rem', letterSpacing: 1, textTransform: 'uppercase', border: '1px solid rgba(244,63,94,0.2)' }}
                />
                <Typography variant="caption" sx={{ color: '#cbd5e1', fontFamily: 'monospace' }}>
                  Image {imgIndex + 1} of {albumImages.length}
                </Typography>
              </Box>
              <IconButton onClick={closeLightbox} sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* 🔧 CHANGE 1/3: Image stage — blurred backdrop of same image fills negative space (Instagram/Google Photos style) */}
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 1, sm: 2 },
                py: 1,
                flex: '1 1 auto',
                minHeight: 0,
                overflow: 'hidden',
              }}
            >
              {/* Blurred backdrop layer — same image, heavily blurred, fills the whole stage */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${albumImages[imgIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(40px) brightness(0.55) saturate(1.1)',
                  transform: 'scale(1.15)', // hide blur edge fringe
                  zIndex: 0,
                }}
              />
              {/* Dark overlay for nav-control legibility */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'rgba(15,23,42,0.35)',
                  zIndex: 1,
                }}
              />

              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: { xs: 8, sm: 16 },
                  color: '#fff',
                  bgcolor: 'rgba(15,23,42,0.55)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  '&:hover': { bgcolor: 'rgba(15,23,42,0.75)' },
                  zIndex: 3,
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              {/* 🔧 CHANGE 2/3: actual image — subtle rounding (8px), soft shadow, no egg shape */}
              <Box
                component="img"
                src={albumImages[imgIndex]}
                alt={`${activeAlbum.title} - Photo ${imgIndex + 1}`}
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  maxWidth: '100%',
                  maxHeight: '72vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: 2,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: { xs: 8, sm: 16 },
                  color: '#fff',
                  bgcolor: 'rgba(15,23,42,0.55)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  '&:hover': { bgcolor: 'rgba(15,23,42,0.75)' },
                  zIndex: 3,
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>

            {/* 🔧 CHANGE 3/3: Footer on solid bg, sits below stage */}
            <Box sx={{ textAlign: 'center', px: 3, pb: 3, pt: 2, flexShrink: 0, bgcolor: '#0f172a', zIndex: 3 }}>
              <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, color: '#fb7185', fontSize: '1.05rem' }}>
                {activeAlbum.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', mt: 0.5 }}>
                {activeAlbum.description}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}