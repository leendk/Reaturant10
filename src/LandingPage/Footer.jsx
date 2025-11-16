import { Box, Typography, Container, Link, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
  const footerLinks = {
    features: ['Get Website', 'Reservation', 'Ordering', 'Marketing'],
    quickLinks: ['Home', 'Services', 'About us', 'Contact us']
  };

return (
  <Box sx={{ backgroundColor: '#2d2d2d', color: 'white', pt: 6, pb: 3 }}>
    <Container maxWidth="lg">

      {/* BEGIN MAIN FLEX WRAPPER */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: 4,
        mb: 4
      }}>

        {/* LOGO COLUMN */}
        <Box 
          sx={{ 
            flex: { xs: '1 1 100%', md: '1 1 20%' },
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box
            component="img"
            src="/logo.svg"
            alt="term-bi logo"
            sx={{
              width: "160px",
              height: "auto",
              mb: 3,
            }}
          />
        </Box>
          {/* FEATURES COLUMN */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } }}>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 2, fontSize: '1rem' }}>
              Features
            </Typography>

            {footerLinks.features.map((link, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  display: 'block',
                  color: '#ddd',
                  fontWeight: 500,
                  textDecoration: 'none',
                  mb: 2,
                  fontSize: '0.95rem',
                  '&:hover': { color: '#ef5350' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>  


        {/* QUICK LINKS COLUMN */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
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
                '&:hover': { color: '#ef5350' }
              }}
            >
              {link}
            </Link>
          ))}
        </Box>

        {/* NEWSLETTER COLUMN */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
            Newsletters
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: '#aaa', mb: 2, fontSize: '0.85rem', lineHeight: 1.6 }}
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
              '& .MuiOutlinedInput-root fieldset': { borderColor: 'transparent' }
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
              '&:hover': { backgroundColor: '#d32f2f' }
            }}
          >
            Subscribe
          </Button>
        </Box>

      </Box>
      {/* END MAIN FLEX WRAPPER */}

      {/* FOOTER BOTTOM */}
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