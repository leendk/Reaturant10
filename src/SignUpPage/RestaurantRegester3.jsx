import { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

export default function RestaurantRegester3() {
  const step = 3;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 const handleNext = () => {
  navigate('/RestaurantRegester/final');
};

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Box sx={{ margin: 0, padding: 0, width: '100%', overflow: 'hidden', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Navbar />

      <Box 
        sx={{ 
          display: 'flex',
          minHeight: 'calc(100vh - 64px)',
          mt: 8,
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {/* Left Side - Form */}
        <Box 
          sx={{ 
            flex: 0.9,
            backgroundColor: '#FFF8F8',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 4, md: 8 }
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '400px' }}>

            {/* Step Indicators */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, justifyContent: 'flex-start' }}>
              {[1, 2, 3, 4].map((num, index) => {
            const isActive = num <= 3; // 1 و 2 حمراء

            return (
                <Box key={num} sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Box
                    sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    backgroundColor: isActive ? '#EC2323' : '#e0e0e0',
                    color: isActive ? 'white' : '#999',
                    boxShadow: isActive ? '0 2px 6px rgba(236, 35, 35, 0.3)' : 'none'
                    }}
                >
                    {num}
                </Box>

                {index < 3 && (
                    <Box
                    sx={{
                        width: '65px',
                        height: '3px',
                        backgroundColor: isActive ? '#EC2323' : '#d5d5d5',
                    }}
                    />
                )}
                </Box>
            );
            })}

            </Box>

            {/* Title */}
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 4,
                textAlign: 'center' ,
                color: '#333'
              }}
            >
              Set your password
            </Typography>

            {/* Step 1 Only */}
            <Box component="form">
              
              
              {/* Password */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.9rem', color: '#333', mb: 1, fontWeight: 500 }}>
                  Password <span style={{ color: '#EC2323' }}>*</span>
                </Typography>

                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    '& .MuiOutlinedInput-root': {
                      height: "48px",
                      backgroundColor: "white",
                      '& fieldset': { borderColor: '#f1dada' },
                      '&:hover fieldset': { borderColor: '#999' },
                      '&.Mui-focused fieldset': { borderColor: '#EC2323' }
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>

              {/* Confirm Password */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.9rem', color: '#333', mb: 1, fontWeight: 500 }}>
                  Confirm password <span style={{ color: '#EC2323' }}>*</span>
                </Typography>

                <TextField
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    '& .MuiOutlinedInput-root': {
                      height: "48px",
                      backgroundColor: "white",
                      '& fieldset': { borderColor: '#f1dada' },
                      '&:hover fieldset': { borderColor: '#999' },
                      '&.Mui-focused fieldset': { borderColor: '#EC2323' }
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>

              {/* Next Button */}
              <Button
                fullWidth
                variant="contained"
                onClick={handleNext}
                sx={{
                  backgroundColor: '#EC2323',
                  color: 'white',
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  fontWeight: 600,
                  mb: 3,
                  '&:hover': {
                    backgroundColor: '#d32f2f'
                  }
                }}
              >
               Register
              </Button>

              {/* Login Redirect */}
              <Typography 
                sx={{ 
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  color: '#666'
                }}
              >
                You already have an account?{' '}
                <Link 
                  to="/login" 
                  style={{ 
                    color: '#EC2323',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  Log In
                </Link>
              </Typography>

            </Box>
          </Box>
        </Box>

        {/* Right Side Illustration */}
        <Box 
          sx={{ 
            flex: 1,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            pt: 15,
            position: 'relative'
          }}
        >

          <Box sx={{ textAlign: 'center', mb: 4, marginTop: '-50px' }}>
            <Box
              component="img"
              src="/Group.svg"
              alt="termbi"
              sx={{
                height: '60px',
                mb: 2
              }}
            />
            <Typography 
              sx={{ 
                fontSize: '1.5rem',
                color: '#666',
                fontWeight: 500
              }}
            >
              Restaurants Management System
            </Typography>
          </Box>

          <Box
            sx={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="/assets/Regester/illustration.svg"
              alt="Restaurant Management"
              sx={{
                width: '110%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
