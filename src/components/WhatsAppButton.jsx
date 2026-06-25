import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import SvgIcon from '@mui/material/SvgIcon';

const WhatsAppOriginalIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 175.216 175.552">
    <defs>
      <linearGradient id="wa-b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#57d163" />
        <stop offset="1" stopColor="#23b33a" />
      </linearGradient>
    </defs>
    <path fill="#fff" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324a60.955 60.955 0 0 0 31.29 8.57c33.754 0 61.182-27.421 61.178-61.121a60.75 60.75 0 0 0-17.895-43.251 60.72 60.72 0 0 0-43.401-17.989z" />
    <path fill="url(#wa-b)" d="M87.184 30.93c-30.474 0-55.26 24.775-55.274 55.218a55.16 55.16 0 0 0 8.475 29.487l1.324 2.099-5.624 20.534 21.073-5.527 2.028 1.204a55.07 55.07 0 0 0 28.108 7.694c30.49 0 55.27-24.777 55.266-55.207a54.88 54.88 0 0 0-16.18-39.11 54.85 54.85 0 0 0-39.196-16.392z" />
    <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647z" clipRule="evenodd" />
  </SvgIcon>
);

export default function WhatsAppButton() {
  const phoneNumber = '7569354292';
  const message = encodeURIComponent('Hello Little Hearts School! I would like to enquire about student admissions.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Zoom in timeout={1000}>
      <Fab
        component="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 40,
          bgcolor: '#25d366',
          color: '#fff',
          boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
          '&:hover': { bgcolor: '#128c7e' },
        }}
      >
        <WhatsAppOriginalIcon sx={{ fontSize: 28 }} />
      </Fab>
    </Zoom>
  );
}