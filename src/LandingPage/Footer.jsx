import { Box, Typography, Container, Link, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const footerLinks = {
    features: ['Our Website', 'Reservation', 'Ordering', 'Monitoring'],
    quickLinks: ['Home', 'Services', 'About us', 'Contact us']
  };

  return (
    <Box sx={{ backgroundColor: '#2d2d2d', color: 'white', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: 4,
          mb: 4
        }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 400,
                mb: 3,
                fontSize: '1.75rem',
                letterSpacing: '0.5px'
              }}
            >
              term<span style={{ color: '#ef5350' }}>bi</span>
            </Typography>
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem'
              }}
            >
              Features
            </Typography>
            {footerLinks.features.map((link, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  display: 'block',
                  color: '#aaa',
                  textDecoration: 'none',
                  mb: 1,
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#ef5350'
                  }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem'
              }}
            >
              Quick Link
            </Typography>
            {footerLinks.quickLinks.map((link, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  display: 'block',
                  color: '#aaa',
                  textDecoration: 'none',
                  mb: 1,
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#ef5350'
                  }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem'
              }}
            >
              Newsletters
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#aaa',
                mb: 2,
                fontSize: '0.85rem',
                lineHeight: 1.6
              }}
            >
              Stay up to date with our latest news, and never exclusive deals, and more.
            </Typography>
            <TextField
              placeholder="Email Address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: 'white',
                borderRadius: '5px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent'
                  }
                }
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#ef5350',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                py: 1,
                '&:hover': {
                  backgroundColor: '#d32f2f'
                }
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Box sx={{ 
          mt: 4, 
          pt: 3, 
          borderTop: '1px solid #444',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Typography variant="body2" sx={{ color: '#aaa', fontSize: '0.85rem' }}>
            Copyright © 2024 | termbi
          </Typography>

          <Box>
            <IconButton sx={{ color: '#aaa', '&:hover': { color: '#ef5350' } }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: '#aaa', '&:hover': { color: '#ef5350' } }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: '#aaa', '&:hover': { color: '#ef5350' } }}>
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
