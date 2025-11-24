import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { FormControl, Select, MenuItem } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

export default function ContactUs() {
  return (
    <Box sx={{ margin: 0, padding: 0, width: '100%', overflow: 'hidden' }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ py: 12, mt: 8 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 6,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'stretch' } // ← المحاذاة المعدّلة
          }}
        >
          {/* LEFT SIDE – TEXT FORM */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography
              variant="h4"
              sx={{
                color: '#EC2323',
                fontWeight: 700,
                mb: 2,
                fontSize: '2rem'
              }}
            >
              Contact Us
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 4,
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}
            >
             Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              <br />
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
            </Typography>

            {/* FORM */}
            <Box component="form" sx={{ mb: 4 }}>
              {[{ label: 'Name' }, { label: 'Email' }, { label: 'Phone number' }].map((item, index) => (
                <TextField
                  key={index}
                  fullWidth
                  label={
                    <span style={{ fontWeight: 300, fontSize: '1rem', color: '#333' }}>
                      {item.label} <span style={{ color: '#EC2323' }}>*</span>
                    </span>
                  }
                  variant="outlined"
                  sx={{
                    width: '80%',
                    mb: 2.5,
                    '& .MuiOutlinedInput-root': {
                      height: '46px',
                      backgroundColor: 'white',
                      '& fieldset': { borderColor: '#ddd' },
                      '&:hover fieldset': { borderColor: '#999' }
                    },
                    '& .MuiInputLabel-root': {
                    
                      fontSize: '1rem',
                      color: '#333'
                    },
                    '& input': {
                     
                      fontSize: '1rem'
                    }
                  }}
                />
              ))}
              {/* SELECT */}
              <FormControl fullWidth sx={{ mb: 3,width: '80%' }}>
                <Select
                  displayEmpty
                  defaultValue=""
                  sx={{
                    height: '46px',
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ddd'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#999'
                    },
                    '& .MuiSelect-icon': {
                      color: '#EC2323'
                    }
                  }}
                >
                  <MenuItem value="" disabled>
                    How did you find us?
                  </MenuItem>
                  <MenuItem value="google">Google</MenuItem>
                  <MenuItem value="facebook">Facebook</MenuItem>
                  <MenuItem value="instagram">Instagram</MenuItem>
                  <MenuItem value="friend">Friend recommendation</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#EC2323',
                  color: 'white',
                  width: '80%',
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#d32f2f'
                  }
                }}
              >
                Submit
              </Button>
            </Box>

            {/* CONTACT INFO */}
            <Box
  
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 4, // المسافة بين العناصر (مطابقة للصورة)
              mt: 2,
              width: "100%",
              mr: 3
            }}
          >
            {/* PHONE */}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <PhoneIcon sx={{ color: "#EC2323", fontSize: 22 }} />
              <Box>
                <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#333" }}>
                  PHONE
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "#333", mt: "2px" }}>
                  +44 9 543 871 1234
                </Typography>
              </Box>
            </Box>

            {/* FAX */}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <PrintIcon sx={{ color: "#EC2323", fontSize: 22 }} />
              <Box>
                <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#333" }}>
                  FAX
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "#333", mt: "2px" }}>
                  +44 9 543 871 1234
                </Typography>
              </Box>
            </Box>

            {/* EMAIL */}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <EmailIcon sx={{ color: "#EC2323", fontSize: 22 }} />
              <Box>
                <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#333" }}>
                  EMAIL
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "#333", mt: "2px" }}>
                  Help@termbi.com
                </Typography>
              </Box>
            </Box>
          </Box>

          </Box>

          {/* RIGHT SIDE – IMAGE */}
          <Box
            sx={{
              flex: 1,
              height: '100%',     // ← يجعل الصورة بنفس ارتفاع النص
              display: 'flex'
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',     // ← تمدد حسب ارتفاع النص
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <Box
                component="img"
                src="assets/contact-us/contact-us.svg"
                alt="Contact Us"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
