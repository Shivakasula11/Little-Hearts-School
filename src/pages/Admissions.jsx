import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { SESSION_YEAR } from '../config/academicYear';
import { postJSON } from '../services/api';
import SEO from '../seo/SEO';

const STEPS = [
  { num: '01', title: 'Online or Offline Enquiry', desc: 'Submit our quick digital enquiry form or visit our front desk to receive our prospectus file.' },
  { num: '02', title: 'Guided Campus Walkthrough', desc: 'Tour our digital smart rooms, child playground, bus lines and discuss curriculum with our staff.' },
  { num: '03', title: 'Enrolment Form Submission', desc: 'Fill out the formal application docket and attach required certificates and child photographs.' },
  { num: '04', title: 'Playful Child Interaction', desc: 'A gentle, informal conversational hour to assess child-specific milestone curves and sensory interests.' },
  { num: '05', title: 'Admission Confirmation', desc: 'Secure study seats, obtain standard uniforms and syllabus booklets prior to academic commencement.' },
];

const DOCUMENTS = [
  { label: 'Primary Birth Certificate', desc: 'Copy issued by Gram Panchayat / Municipality / Govt. registrar.' },
  { label: 'Past Academic Records', desc: 'Transfer Certificate (T.C.) & past marks records (Only for Class 1 to 5 admissions).' },
  { label: 'Parent Address Proof Documents', desc: 'Copy of Aadhaar Card, Ration Card, or electricity bill indicators.' },
  { label: 'Child Photographs', desc: '4 passport-sized front-facing colorful photographs of the child.' },
  { label: 'Parent Photo IDs', desc: 'Passport size photographs of father and mother for security.' },
  { label: 'Medical Status Certificate', desc: 'Optional record detailing vaccine logs or critical allergen lists.' },
];

const CLASS_OPTIONS = [
  { value: 'Playgroup', label: 'Playgroup (2 - 3 Years)' }, { value: 'Nursery', label: 'Nursery (3 - 4 Years)' },
  { value: 'LKG', label: 'LKG (4 - 5 Years)' }, { value: 'UKG', label: 'UKG (5 - 6 Years)' },
  { value: 'Class 1', label: 'Class 1' }, { value: 'Class 2', label: 'Class 2' },
  { value: 'Class 3', label: 'Class 3' }, { value: 'Class 4', label: 'Class 4' }, { value: 'Class 5', label: 'Class 5' },
];

export default function Admissions() {
  const [form, setForm] = useState({ parentName: '', childName: '', childDob: '', classApplyingFor: '', phone: '', email: '', message: '', website: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!form.parentName || !form.childName || !form.childDob || !form.classApplyingFor || !form.phone || !form.email) {
      setErrorMsg('Please populate all required fields with accurate records.');
      return;
    }
    if (form.phone.length < 10) {
      setErrorMsg('Please supply a valid contact phone number (minimum 10 digits).');
      return;
    }

    setSubmitting(true);
    try {
      await postJSON('/api/enquiry/admission', form);
      setIsSubmitted(true);
    } catch (err) {
      setErrorMsg(err.message || 'Submission failed. Please try again, or call 9441513977.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({ parentName: '', childName: '', childDob: '', classApplyingFor: '', phone: '', email: '', message: '', website: '' });
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Box sx={{ background: 'linear-gradient(135deg, #fbbf24, #f43f5e)', py: 8, px: 2, color: '#fff', textAlign: 'center', mb: 8, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 30px rgba(244,63,94,0.2)' }}>
        <Box sx={{ position: 'absolute', top: -48, right: -48, width: 140, height: 140, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Chip label={`🎓 Academic Session ${SESSION_YEAR} Active`} sx={{ bgcolor: 'rgba(0,0,0,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', fontFamily: '"Fredoka", sans-serif', fontWeight: 600, mb: 2, fontSize: '0.75rem' }} />
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>Admissions Open: Playgroup to Class 5</Typography>
          <Typography sx={{ color: '#fef2f2', maxWidth: 600, mx: 'auto', mt: 2 }}>Start your child's brilliant educational trajectory with us in Devarakonda.</Typography>
        </Container>
      </Box>
      <SEO
        title="Admissions Open – Playgroup to Class 5"
        description="Admissions open at Little Hearts Kindergarten School, Devarakonda. Apply online for Playgroup, Nursery, LKG, UKG, or Class 1-5. Simple 5-step process. Call 9441513977."
        path="/admissions"
      />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Grid container spacing={5} alignItems="flex-start">
            <Grid size={{ xs: 12, lg: 7 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Five Simple Steps</Typography>
              <Typography variant="h4" sx={{ color: 'primary.main', mt: 1, mb: 1, fontSize: { xs: '1.5rem', sm: '1.9rem' } }}>Our Standard Admission Process</Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: 'warning.main', borderRadius: 2, mb: 4 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {STEPS.map((step, i) => (
                  <Paper key={i} sx={{ p: 3, display: 'flex', gap: 2, borderRadius: 4, transition: '0.2s', '&:hover': { boxShadow: 6 } }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: 'secondary.main', fontSize: '1.2rem' }}>{step.num}</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, color: '#1e293b', mb: 0.5 }}>{step.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{step.desc}</Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Paper sx={{ p: 4, borderRadius: 6, bgcolor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <AssignmentIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h6" sx={{ color: 'primary.main', fontSize: '1.1rem' }}>Required Documents Checklist</Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>Please gather and duplicate photocopies of these certificates prior to interaction events:</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {DOCUMENTS.map((doc, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Box sx={{ bgcolor: '#d1fae5', p: 0.5, borderRadius: 2, mt: 0.3 }}><CheckCircleIcon sx={{ fontSize: 18, color: '#059669' }} /></Box>
                      <Box>
                        <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#1e293b' }}>{doc.label}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>{doc.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Enquiry Form */}
          <Paper sx={{ p: { xs: 3, sm: 5, md: 6 }, borderRadius: 6, border: '1px solid #fff1f2', boxShadow: '0 10px 40px rgba(244,63,94,0.08)' }}>
            <Box sx={{ maxWidth: 700, mx: 'auto' }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Reserve Your Seat Slot</Typography>
                <Typography variant="h4" sx={{ color: 'primary.main', mt: 1, mb: 1, fontSize: { xs: '1.4rem', sm: '1.8rem' } }}>{`Online Admission Enquiry Form ${SESSION_YEAR}`}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Submit this record to secure an interaction slot immediately. Our front desk panel will contact you in 24 hours.</Typography>
                <Box sx={{ width: 60, height: 4, bgcolor: 'warning.main', mx: 'auto', borderRadius: 2, mt: 2 }} />
              </Box>
              {isSubmitted ? (
                <Alert severity="success" icon={<CheckCircleIcon />} sx={{ borderRadius: 4, py: 3 }}>
                  <Typography sx={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>Form Submitted Successfully!</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>Thank you, parent <strong>{form.parentName}</strong>. We have registered child <strong>{form.childName}</strong>'s name for <strong>{form.classApplyingFor}</strong> class enquiry. A counselor will call you on <strong>{form.phone}</strong> or send details to <strong>{form.email}</strong> in 1 business day.</Typography>
                  <Button variant="contained" size="small" onClick={handleReset} sx={{ bgcolor: '#0f172a', '&:hover': { bgcolor: '#1e293b' } }}>Submit Another Enquiry</Button>
                </Alert>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Parent Name *" placeholder="e.g. Ramesh Reddy" value={form.parentName} onChange={handleChange('parentName')} size="small" disabled={submitting} /></Grid>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Child Name *" placeholder="e.g. Anshul Reddy" value={form.childName} onChange={handleChange('childName')} size="small" disabled={submitting} /></Grid>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Child Date of Birth *" type="date" value={form.childDob} onChange={handleChange('childDob')} size="small" slotProps={{ inputLabel: { shrink: true } }} disabled={submitting} /></Grid>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth select label="Class Applying For *" value={form.classApplyingFor} onChange={handleChange('classApplyingFor')} size="small" disabled={submitting}>{CLASS_OPTIONS.map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}</TextField></Grid>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Contact Phone *" placeholder="e.g. 94XXXXXXX7" value={form.phone} onChange={handleChange('phone')} size="small" disabled={submitting} /></Grid>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Contact Email *" type="email" placeholder="e.g. parent@gmail.com" value={form.email} onChange={handleChange('email')} size="small" disabled={submitting} /></Grid>
                  </Grid>
                  <TextField fullWidth multiline rows={4} label="Message or Special Child Needs (Optional)" placeholder="Provide any information regarding speech patterns, health conditions, or pick-up location details..." value={form.message} onChange={handleChange('message')} size="small" disabled={submitting} />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={submitting}
                    startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : null}
                    sx={{ borderRadius: 3, py: 1.5 }}
                  >
                    {submitting ? 'Submitting...' : 'Submit Admission Enquiry'}
                  </Button>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}