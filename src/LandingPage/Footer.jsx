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
  <Box sx={{ backgroundColor: '#2d2d2d', color: 'white', pt: 6, pb: 3, width: '100%' }}>
    <Box sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 }, maxWidth: '1600px', margin: '0 auto' }}>

      {/* BEGIN MAIN FLEX WRAPPER */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: { xs: 3, md: 4 },
        mb: 4,
        justifyContent: { xs: 'flex-start', md: 'space-between' }
      }}>

        {/* LOGO COLUMN */}
        <Box 
          sx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' },
            minWidth: { xs: '100%', sm: '200px' }
          }}
        >
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
          {/* FEATURES COLUMN */}
          <Box sx={{ flex: { xs: '1 1 45%', sm: '1 1 45%', md: '1 1 18%' }, minWidth: { xs: '45%', sm: '150px' } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
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
                  '&:hover': { color: '#ef5350' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>  


        {/* QUICK LINKS COLUMN */}
        <Box sx={{ flex: { xs: '1 1 45%', sm: '1 1 45%', md: '1 1 18%' }, minWidth: { xs: '45%', sm: '150px' } }}>
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
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: { xs: '100%', md: '280px' } }}>
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
        flexWrap: 'wrap',
        gap: 2
      }}>
        <Typography variant="body2" sx={{ color: '#aaa', fontSize: '0.85rem' }}>
          Copyright © 2024 | termbi
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
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

    </Box>
  </Box>
);
}