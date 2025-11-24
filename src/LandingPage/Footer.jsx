import { Box, Typography, Container, Link, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  const footerLinks = {
    features: ['Get Website', 'Reservation', 'Ordering', 'Marketing'],
    quickLinks: ['Home', 'Services', 'About us', 'Contact us']
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: '#2d2d2d',
        color: 'white',
        width: "100%",
        margin: 0,
        padding: 0
      }}
    >

      {/* MAIN CONTENT */}
      <Box sx={{ pt: 6, pb: 4 }}>

        {/* MAIN FLEX ROW */}
        <Box 
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            mb: 4,
            px: { xs: 3, md: 8 }
          }}
        >

          {/* LOGO */}
          <Box 
            sx={{ 
              flex: { xs: '1 1 100%', md: '1 1 20%' },
              display: "flex",
              justifyContent: "flex-start",
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

          {/* FEATURES */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 20%' },
              fontFamily: 'SF Pro Display'
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
              Features
            </Typography>

            {footerLinks.features.map((link, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  display: 'block',
                  color: '#ddd',
                  textDecoration: 'none',
                  mb: 2,
                  fontSize: '0.9rem',
                  '&:hover': { color: '#ef5350' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          {/* QUICK LINKS */}
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
                  color: '#ddd',
                  textDecoration: 'none',
                  mb: 2,
                  fontSize: '0.9rem',
                  '&:hover': { color: '#ef5350' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          {/* NEWSLETTER */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
              Newsletters
            </Typography>

            <Typography variant="body2" sx={{ color: '#ddd', mb: 2, fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>
              Stay up to date with our latest news,<br />
              recive exclusive deals,and more.
            </Typography>

            <TextField
              placeholder="Enter your email address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                mb: 2,
                width: '300px',
                backgroundColor: 'white',
                borderRadius: '5px',
                '& input': { fontSize: '0.85rem' },
                '& .MuiOutlinedInput-root fieldset': { borderColor: 'transparent' }
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#EC2323',
                color: 'white',
                width: '200px',
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

      </Box>

      {/* FOOTER BOTTOM — خارج الكونتينر */}
      <Box
        sx={{
          py: 2,
          px: { xs: 3, md: 8 },
          backgroundColor: '#111',
          borderTop: '1px solid #333',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <Typography variant="body2" sx={{ color: '#aaa', fontSize: '0.95rem', fontWeight: 500 }}>
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
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>

    </Box>
  );
}
