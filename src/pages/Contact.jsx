import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { postJSON } from '../services/api';
import SEO from '../seo/SEO';

const CONTACT_CARDS = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 28 }} />, iconBg: '#fff1f2', iconColor: '#f43f5e', title: 'School Landmark',
    content: <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>H.NO 20-105, Gandhi Nagar,<br />Devarakonda, Nalgonda District,<br />Telangana - 508248</Typography>,
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28 }} />, iconBg: '#d1fae5', iconColor: '#059669', title: 'Call-to-Talk',
    content: (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {[{ num: '9441513977', label: 'Helpdesk' }, { num: '7569354292', label: 'Admin' }, { num: '8125732746', label: 'Principal' }].map((ph) => (
          <Link key={ph.num} href={`tel:${ph.num}`} underline="hover" sx={{ color: 'text.secondary', fontSize: '0.85rem', fontFamily: 'monospace', '&:hover': { color: 'secondary.main' } }}>{ph.num} ({ph.label})</Link>
        ))}
      </Box>
    ),
  },
  {
    icon: <EmailIcon sx={{ fontSize: 28 }} />, iconBg: '#e0f2fe', iconColor: '#0284c7', title: 'Email Enquiries',
    content: (
      <Box>
        <Link href="mailto:Littleheartskg26@gmail.com" underline="hover" sx={{ color: 'text.secondary', fontSize: '0.85rem', wordBreak: 'break-all', '&:hover': { color: 'secondary.main' } }}>Littleheartskg26@gmail.com</Link>
        <Typography variant="caption" sx={{ display: 'block', color: 'text.disabled', mt: 0.5 }}>Available 24/7 for support</Typography>
      </Box>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!form.name || !form.email || !form.phone || !form.message) {
      setErrorMsg('Please populate all required fields.');
      return;
    }
    if (form.phone.length < 10) {
      setErrorMsg('Please supply a valid contact phone number.');
      return;
    }

    setSubmitting(true);
    try {
      await postJSON('/api/enquiry/contact', {
        ...form,
        subject: form.subject || 'General Query',
      });
      setIsSubmitted(true);
    } catch (err) {
      setErrorMsg(err.message || 'Submission failed. Please try again, or call 9441513977.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Box sx={{ background: 'linear-gradient(to right, rgba(224,242,254,0.6), rgba(255,241,242,0.5))', py: { xs: 6, md: 8 }, px: 2, mb: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Connect Instantly</Typography>
          <Typography variant="h3" sx={{ color: 'primary.main', mt: 1, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>Contact Our Campus Admin</Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mt: 2 }}>Have questions regarding bus routes, fee structures, or child-care protocols? Let us know.</Typography>
        </Container>
      </Box>
      <SEO
        title="Contact Us – Location, Phone & Enquiry"
        description="Contact Little Hearts Kindergarten School, Gandhi Nagar, Devarakonda. Call 9441513977, email Littleheartskg26@gmail.com, or visit us. Google Maps directions included."
        path="/contact"
      />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Grid container spacing={3}>
            {CONTACT_CARDS.map((card) => (
              <Grid size={{ xs: 12, md: 4 }} key={card.title}>
                <Card sx={{ p: 3, display: 'flex', gap: 2, alignItems: 'flex-start', height: '100%' }}>
                  <Box sx={{ bgcolor: card.iconBg, color: card.iconColor, p: 1.5, borderRadius: 3, display: 'flex', flexShrink: 0 }}>{card.icon}</Box>
                  <Box>
                    <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: '#1e293b', mb: 0.5 }}>{card.title}</Typography>
                    {card.content}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={5} sx={{ alignItems: 'stretch' }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Paper sx={{ p: { xs: 3, sm: 5 }, borderRadius: 6, bgcolor: '#f8fafc', border: '1px solid #e2e8f0', height: '100%' }}>
                <Typography variant="h5" sx={{ color: 'primary.main', mb: 0.5 }}>Drop Us a Message</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>Provide details below; we are excited to align with you.</Typography>
                {isSubmitted ? (
                  <Alert severity="success" icon={<CheckCircleIcon />} sx={{ borderRadius: 4, py: 3 }}>
                    <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, mb: 1, fontSize: '1.05rem' }}>Thank You, Parent!</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>We have received your communications on <strong>{form.email}</strong>. Our Devarakonda administrative wing will reach out in 24 hours.</Typography>
                    <Button variant="contained" size="small" onClick={handleReset} sx={{ bgcolor: '#0f172a', '&:hover': { bgcolor: '#1e293b' } }}>Send Another Message</Button>
                  </Alert>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {errorMsg && <Alert severity="error" sx={{ borderRadius: 3 }}>{errorMsg}</Alert>}

                    {/* Honeypot field — hidden from real users, baited for bots */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={handleChange('website')}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}
                    />

                    <TextField fullWidth label="Your Name *" placeholder="e.g. Anand Goud" value={form.name} onChange={handleChange('name')} size="small" sx={{ bgcolor: '#fff' }} disabled={submitting} />
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Email Address *" type="email" placeholder="e.g. parent@gmail.com" value={form.email} onChange={handleChange('email')} size="small" sx={{ bgcolor: '#fff' }} disabled={submitting} /></Grid>
                      <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Phone Number *" placeholder="e.g. 7XXXXXXXX2" value={form.phone} onChange={handleChange('phone')} size="small" sx={{ bgcolor: '#fff' }} disabled={submitting} /></Grid>
                    </Grid>
                    <TextField fullWidth label="Subject (Optional)" placeholder="e.g. School Bus Routes Inquiry" value={form.subject} onChange={handleChange('subject')} size="small" sx={{ bgcolor: '#fff' }} disabled={submitting} />
                    <TextField fullWidth multiline rows={4} label="Your Message *" placeholder="Describe your question details precisely..." value={form.message} onChange={handleChange('message')} size="small" sx={{ bgcolor: '#fff' }} disabled={submitting} />
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      disabled={submitting}
                      startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                      sx={{ borderRadius: 3, py: 1.5 }}
                    >
                      {submitting ? 'Submitting...' : 'Submit Contact Enquiry'}
                    </Button>
                  </Box>
                )}
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Paper sx={{ borderRadius: 6, overflow: 'hidden', height: '100%', minHeight: 400, border: '1px solid #e2e8f0' }}>
                <Box component="iframe" title="Little Hearts Kindergarten School location map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.7571485353965!2d78.91362729678954!3d16.6890317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcaed00199c892b%3A0x2da7e380605febf4!2sLITTLE%20HEARTS%20KINDER%20GARTEN%20SCHOOL!5e0!3m2!1sen!2sin!4v1782022823893!5m2!1sen!2sin" sx={{ width: '100%', height: '100%', border: 0, minHeight: 400, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}