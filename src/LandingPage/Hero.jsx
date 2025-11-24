import { Box, Typography, Button } from '@mui/material';
import HeroImage from '../../assets/hero/heroImage.svg';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: "100vw",
        maxWidth: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        overflow: "hidden",
        m: 0,
        p: 0
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          flexDirection: { xs: 'column', md: 'row' },
          px: { xs: 2, md: 8 } // مسافة داخلية بدون فراغات خارجية
        }}
      >
        <Box sx={{ flex: 1, color: 'white' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2
            }}
          >
            Get your own <br />
            restaurant website
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: '500px',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Termbi - a booking solution for restaurant website that of your daily
            business value which makes all the success fully booking goes.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#EC2323',
              color: 'white',
              px: 5,
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              fontWeight: 600,
              width: '250px',
              '&:hover': {
                backgroundColor: '#d32f2f'
              }
            }}
          >
            Try Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
