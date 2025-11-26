import { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

export default function RestaurantRegester2() {
  const step = 2;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    restaurantName: '',
    restaurantAddress: '',
    restaurantPhone: '',
    countryCode: '+1'
  });

 const handleNext = () => {
  navigate('/RestaurantRegester/step3');
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
            const isActive = num <= 2; // 1 و 2 حمراء

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
              Tell us about your yourself
            </Typography>

            {/* Step 1 Only */}
            <Box component="form">
              
              {/* Restaurant Name */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.9rem', color: '#333', mb: 1, fontWeight: 500 }}>
                  Your name  <span style={{ color: '#EC2323' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  value={formData.restaurantName}
                  onChange={(e) => handleChange('restaurantName', e.target.value)}
                  variant="outlined"
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      '& fieldset': { borderColor: '#ddd' },
                      '&:hover fieldset': { borderColor: '#999' },
                      '&.Mui-focused fieldset': { borderColor: '#EC2323' }
                    }
                  }}
                />
              </Box>

              {/* Restaurant Address */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.9rem', color: '#333', mb: 1, fontWeight: 500 }}>
                  Your email  <span style={{ color: '#EC2323' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  value={formData.restaurantAddress}
                  onChange={(e) => handleChange('restaurantAddress', e.target.value)}
                  variant="outlined"
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      '& fieldset': { borderColor: '#ddd' },
                      '&:hover fieldset': { borderColor: '#999' },
                      '&.Mui-focused fieldset': { borderColor: '#EC2323' }
                    }
                  }}
                />
              </Box>

              {/* Restaurant Phone */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: '0.9rem', color: '#333', mb: 1, fontWeight: 500 }}>
                 Your phone  <span style={{ color: '#EC2323' }}>*</span>
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 0,
                    backgroundColor: '#FFF8F8',
                    border: '1px solid #f1dada',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '48px'
                  }}
                >
                  <Select
                    value={formData.countryCode}
                    onChange={(e) => handleChange('countryCode', e.target.value)}
                    displayEmpty
                    sx={{
                      width: '110px',
                      backgroundColor: '#FAEBEB',
                      borderRight: '1px solid #f1dada',
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
                    }}
                  >
                    <MenuItem value="+1">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box component="img" src="https://flagcdn.com/us.svg" alt="US" sx={{ width: 24, height: 16 }} />
                        +1
                      </Box>
                    </MenuItem>

                    <MenuItem value="+963">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box component="img" src="https://flagcdn.com/sy.svg" alt="SY" sx={{ width: 24, height: 16 }} />
                        +963
                      </Box>
                    </MenuItem>

                    <MenuItem value="+44">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box component="img" src="https://flagcdn.com/gb.svg" alt="UK" sx={{ width: 24, height: 16 }} />
                        +44
                      </Box>
                    </MenuItem>
                  </Select>

                  <TextField
                    fullWidth
                    value={formData.restaurantPhone}
                    onChange={(e) => handleChange('restaurantPhone', e.target.value)}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'white',
                      '& .MuiOutlinedInput-root': {
                        height: '48px',
                        '& fieldset': { border: 'none' }
                      }
                    }}
                  />
                </Box>
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
                Next
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
