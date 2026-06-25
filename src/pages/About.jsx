import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ExploreIcon from '@mui/icons-material/Explore';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MISSION_POINTS } from '../services/data';
import School from '../assets/School.png'
import SEO from '../seo/SEO';


const PROFILE_BULLETS = [
  'Active concept-based classrooms',
  'CCTV monitored child safety campus',
  'Interactive digital screens',
  'Safe and Secure Learning Environment',
];

export default function About() {
  return (
    <Box sx={{ pt: 12, pb: 8 }}>

<SEO
        title="About Us – School Profile, Vision & Mission"
        description="Learn about Little Hearts Kindergarten School in Devarakonda. Our vision, mission, leadership, and educational philosophy for Playgroup to Class 5 students."
        path="/about"
      />

      {/* Header */}
      <Box sx={{ background: 'linear-gradient(to right, rgba(224,242,254,0.6), rgba(255,241,242,0.5))', py: { xs: 6, md: 8 }, px: 2, mb: 6 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>About Our Nursery & Primary School</Typography>
          <Typography variant="h3" sx={{ color: 'primary.main', mt: 1, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>School Profile & Leadership Letter</Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mt: 2 }}>
            Serving young minds in Devarakonda, Nalgonda with custom cognitive syllabus models and heartful childcare values since inception.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* ─── Section 1: Profile ─── */}
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="overline" sx={{ color: '#059669', fontWeight: 600, letterSpacing: 2 }}>Established in 2007</Typography>
              <Typography variant="h4" sx={{ color: 'primary.main', mt: 1, mb: 3, fontSize: { xs: '1.5rem', sm: '1.9rem' } }}>
                Little Hearts Kindergarten & Primary
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2 }}>
                Located in the heart of <strong>Gandhi Nagar, Devarakonda</strong>, Little Hearts is established to elevate foundational education standards in Nalgonda District. We offer structured developmental and academic tracks extending from <strong>Playgroup, Nursery, LKG, and UKG up to primary Class 5</strong>.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3 }}>
                Our educational philosophy believes that the earliest years are the most critical window for language and cognitive alignment. Our curriculum is tailored to emphasize <strong>bilingual Spoken English skills</strong>, practical numerical literacy, digital visual tools, and compassionate moral habits.
              </Typography>
              <Grid container spacing={2}>
                {PROFILE_BULLETS.map((bullet) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={bullet}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ChevronRightIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: '#334155' }}>{bullet}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#fecdd3', borderRadius: 5, transform: 'rotate(3deg)', opacity: 0.6 }} />
                {/* 🔧 CHANGE 1/1 — added loading="lazy" */}
                <Box component="img" loading="lazy" src={School} alt="Children learning" sx={{ position: 'relative', borderRadius: 5, width: '100%', height: 420, objectFit: 'cover', boxShadow: 3, border: '1px solid #f1f5f9' }} />
              </Box>
            </Grid>
          </Grid>

          {/* ─── Section 2: Vision & Mission ─── */}
          <Grid container spacing={4}>
            {/* Vision */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Paper sx={{ background: 'linear-gradient(135deg, #0d5c75, #1e293b)', color: '#fff', p: 5, borderRadius: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <ExploreIcon sx={{ color: '#facc15', fontSize: 26 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Our Sacred Vision</Typography>
                  <Typography sx={{ color: '#cbd5e1', lineHeight: 1.9, mb: 2 }}>
                    "To grow into the prime model of early-grade and playground education in the regional geography, recognized for grooming highly fluent, morally sensitive, and technologically confident tiny stars who embrace the future with robust self-esteem and deep social concern."
                  </Typography>

                  {/* Additional Vision Points */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
                    {[
                      'Build a generation of confident, English-fluent communicators from age 2 itself.',
                      'Create a benchmark for digital-first classroom experiences in rural Telangana.',
                      'Foster emotional resilience, cultural pride, and scientific curiosity in every child.',
                      'Establish a parent-school partnership model that sets new standards in transparency.',
                    ].map((point, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#facc15', flexShrink: 0, mt: 1 }} />
                        <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.7 }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ pt: 3, mt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption" sx={{ color: '#facc15', fontFamily: 'monospace', textTransform: 'uppercase' }}>★ Active learning standard</Typography>
                  <Typography variant="caption" sx={{ color: '#facc15', fontFamily: 'monospace', textTransform: 'uppercase' }}>Devarakonda, Telangana</Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Mission */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Paper sx={{ p: 5, borderRadius: 5, bgcolor: '#f8fafc', border: '1px solid #e2e8f0', height: '100%' }}>
                <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <TrackChangesIcon sx={{ color: 'secondary.main', fontSize: 26 }} />
                </Box>
                <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>Our Mission Pathway</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  Our operations and pedagogy trace directly to these seven core directives:
                </Typography>
                <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {MISSION_POINTS.map((point, i) => (
                    <Box component="li" key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#ffe4e6', color: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0, mt: 0.3 }}>
                        {i + 1}
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{point}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* ─── Section 3: Management Letter ─── */}
          <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 6, border: '1px solid #f1f5f9', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Heart to Heart Discussion</Typography>
                <Typography variant="h4" sx={{ color: 'primary.main', mt: 1, mb: 1, fontSize: { xs: '1.5rem', sm: '1.9rem' } }}>Message From School Management</Typography>
                <Box sx={{ width: 60, height: 4, bgcolor: 'warning.main', mx: 'auto', borderRadius: 2 }} />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Typography sx={{ fontWeight: 600, color: '#1e293b' }}>Dear Respected Parents, Community Elders, and Guardians,</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                  Welcome to the warm folds of the Little Hearts family. Education in the modern era begins long before a student reads formal textbooks. The cognitive habits, social patterns of empathy, physical balance, and communication confidence that the child constructs between two and eight years old lay down the foundations of all subsequent milestones.
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                  We established <strong>Little Hearts Kindergarten School</strong> right here in Gandhi Nagar, Devarakonda with a simple, solid dream: to bring world-class early-childhood pedagogy and secure nurturing within accessible boundaries of Nalgonda District. Children should not spend their early years in tedious rote learning. They must sing, touch, slide, trace, speak, and ask questions.
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>

              
To support this active exploration, we continuously invest in <strong>interactive digital school screens</strong>, sensory educational toys, highly robust CCTV monitoring systems, and comprehensive sanitization protocols to ensure a safe and engaging learning environment. Our faculty comprises passionate and compassionate female educators who possess specialized credentials in child counseling and the creative development of motor skills, fostering the holistic growth of every child.


                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                  We maintain an absolute open-door communication framework. We view parents as active co-educators. Together, we track, guide, and celebrate every time your wonderful young child learns a new phonic sound, draws a colorful shape, or speaks a confident line of Spoken English.
                </Typography>
                <Typography sx={{ fontWeight: 500, color: 'primary.main', mt: 1 }}>
                  Let us partner to construct a secure, joyous landing platform where your children can grow, create, and shine with pure hearts.
                </Typography>
              </Box>

              <Box sx={{ pt: 4, mt: 4, borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 3 }}>
                <Box>
                  <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: '#1e293b' }}>Our Leadership Board</Typography>
                  <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 500 }}>Founder Panel & Board of Directors</Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: 'text.disabled', fontFamily: 'monospace', mt: 0.5 }}>Little Hearts Kindergarten School, Devarakonda</Typography>
                </Box>
                <Paper sx={{ px: 2.5, py: 1.5, borderRadius: 3, bgcolor: '#fff1f2', border: '1px solid #fecdd3', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Typography sx={{ fontSize: 22 }}>🏫</Typography>
                  <Typography variant="caption" sx={{ color: 'primary.main', lineHeight: 1.4 }}>
                    "Little Hearts, <br /><strong>Big Achievements.</strong>"
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Paper>

        </Box>
      </Container>
    </Box>
  );
}