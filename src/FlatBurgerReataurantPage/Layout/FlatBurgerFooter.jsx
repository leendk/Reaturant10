import { Box, Typography, Container, Link, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function FlatBurgerFooter() {
  const footerLinks = {
    features: ['Get Website', 'Reservation', 'Ordering', 'Marketing'],
    quickLinks: ['Reserve a table','Home', 'Services', 'About us', 'Contact us']
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: '#000000',
        color: 'white',
        width: "100%",
        margin: 0,
        padding: 0
      }}
    >

      {/* MAIN CONTENT */}
      <Box sx={{ pt: 0.9, pb: 0.5 }}>


        {/* MAIN FLEX ROW */}
        <Box 
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2,
            px: { xs: 3, md: 6 },
            ml: 6  
          }}
        >

          {/* LOGO */}
       <Box 
          sx={{ 
            flex: { xs: '1 1 100%', md: '1 1 20%' },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",   // محاذاة لليسار كما طلبت
            textAlign: "left",
            gap: 0,                      // نتحكم بالمسافات يدوياً لكل عنصر
            mt: 3
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="/FlatBurgerLogo.svg"
            alt="FlatBurgerLogo"
            sx={{
              width: "180px",
              height: "auto",
              mb: 1,  
              ml: -3       // ← زيادة المسافة بين الشعار و "Keep in touch"
            }}
          />

          {/* Keep in touch */}
          <Typography 
            sx={{ 
              color: "#ddd", 
              fontSize: "0.96rem", 
              fontWeight: 300,
              mb: 0.5, 
              fontFamily: 'SF Pro Display'   // ← مسافة صغيرة تحت النص
            }}
          >
            Keep in touch
          </Typography>

          {/* Icons — مسافة صغيرة فوق الأيقونات */}
          <Box sx={{ display: "flex", gap: 2, mt: 0.25, mb: 1}}>
            <FacebookIcon sx={{ color: "#ddd", fontSize: "20px" }} />
            <InstagramIcon sx={{ color: "#ddd", fontSize: "20px" }} />
            <TwitterIcon sx={{ color: "#ddd", fontSize: "20px" }} />
          </Box>

          {/* Provided by + tembi (بمسافة صغيرة بين السطور) */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3, mt: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: "#ddd",fontWeight: 300, fontSize: "0.9rem", lineHeight: 1 }}>
                Provided by
              </Typography>
              {/* image for 'tembi' word */}
              <Box
                component="img"
                src="/Group1.svg"   
                alt="termbi"
                sx={{ width: "60px", height: "auto", display: "inline-block" }}
              />
            </Box>

            {/* الموقع — قريب من السطر أعلاه */}
            <Typography sx={{ color: "#ddd", fontSize: "0.9rem", mt: 0.5 }}>
              www.termbi.com
            </Typography>
          </Box>
        </Box>


         
         {/* Opening Hours */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 20%' },
              fontFamily: 'SF Pro Display',
              mt: 3
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ fontWeight: 600, mb: 3, fontSize: '1.1rem', color: "#fff" }}
            >
              Opening Hours
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ArrowRightAltIcon sx={{ color: "#ddd", fontSize: "1.5rem" }} />

            <Typography sx={{ color: "#ddd", fontSize: "0.9rem" }}>
              08 AM TO 12 AM
            </Typography>
          </Box>

              <Typography sx={{ color: "#bbb", fontSize: "0.85rem", ml: 4 }}>
                MONDAY TO FRIDAY
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ArrowRightAltIcon sx={{ color: "#ddd", fontSize: "1.5rem" }} />

                <Typography sx={{ color: "#ddd", fontSize: "0.9rem" }}>
                  11 AM TO 10 PM
                </Typography>
              </Box>
              <Typography sx={{ color: "#bbb", fontSize: "0.85rem", ml: 4 }}>
                SATURDAY & SUNDAY
              </Typography>
            </Box>
          </Box>


          {/* QUICK LINKS */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } , mt: 3    }}>
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
                  fontFamily: 'SF Pro Display',
                  mb: 2,
                  fontSize: '0.92rem',
                  '&:hover': { color: '#c56e11ff' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          {/* NEWSLETTER */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' },mt: 3     }}>
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
                backgroundColor: '#EB7A00',
                color: 'white',
                width: '200px',
                textTransform: 'none',
                fontWeight: 600,
                py: 1,
                '&:hover': { backgroundColor: '#c56e11ff' }
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
          py: 0.2,
          px: { xs: 3, md: 6 },
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
