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
    <Box 
      sx={{ 
        backgroundColor: '#2d2d2d',
        color: 'white',
        pt: 6,
        pb: 3,
        width: "100%",
        mx: 0,
        px: 0
      }}
    >

      {/* جعل الكونتينر يأخذ العرض كاملًا */}
      <Container maxWidth={false} disableGutters sx={{ mx: 0, px: 0 }}>

        {/* BEGIN MAIN FLEX WRAPPER */}
        <Box 
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            mb: 4,
            px: 5  // padding بسيط داخلي فقط // يمكن حذفه إذا أردت
          }}
        >

          {/* LOGO COLUMN */}
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

          {/* FEATURES COLUMN */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 20%' },
              fontFamily: 'SF Pro Display'   // ← يطبق على العنوان والروابط معاً
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}
            >
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

          {/* NEWSLETTER COLUMN */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
              Newsletters
            </Typography>

            <Typography 
              variant="body2"
              sx={{ color: '#ddd', mb: 2, fontSize: '0.95rem', lineHeight: 1.6,fontWeight:500 }}
            >
              Stay up to date with our latest news,
              <br />
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
                '& input': {
                  fontSize: '0.85rem',    // ← تصغير حجم الخط داخل الحقل
                },

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
        {/* END MAIN FLEX WRAPPER */}

        {/* FOOTER BOTTOM */}
          <Box
            sx={{
              mt: 'auto', 
              py: 1,
              px: 6,
              backgroundColor: '#111',       // الخلفية الداكنة مثل الصورة
              borderTop: '1px solid #333',   // الخط الرفيع بالأعلى
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: '#aaa', fontSize: '0.85rem' }}
            >
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

      </Container>
    </Box>
  );
}
