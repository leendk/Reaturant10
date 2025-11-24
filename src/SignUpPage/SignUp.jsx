import { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar';

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    restaurantName: '',
    restaurantAddress: '',
    restaurantPhone: '',
    countryCode: '+1'
  });

  const handleNext = () => {
    if (step === 1) {
      if (!formData.restaurantName || !formData.restaurantAddress || !formData.restaurantPhone) {
        alert('Please fill in all required fields');
        return;
      }
    }
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography 
                sx={{ 
                  fontSize: '0.9rem', 
                  color: '#333',
                  mb: 1,
                  fontWeight: 500
                }}
              >
                Restaurant name <span style={{ color: '#EC2323' }}>*</span>
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

            <Box sx={{ mb: 3 }}>
              <Typography 
                sx={{ 
                  fontSize: '0.9rem', 
                  color: '#333',
                  mb: 1,
                  fontWeight: 500
                }}
              >
                Restaurant address <span style={{ color: '#EC2323' }}>*</span>
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

            <Box sx={{ mb: 4 }}>
              <Typography 
                sx={{ 
                  fontSize: '0.9rem', 
                  color: '#333',
                  mb: 1,
                  fontWeight: 500
                }}
              >
                Restaurant phone <span style={{ color: '#EC2323' }}>*</span>
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Select
                  value={formData.countryCode}
                  onChange={(e) => handleChange('countryCode', e.target.value)}
                  sx={{
                    width: '100px',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ddd' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#999' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#EC2323' }
                  }}
                >
                  <MenuItem value="+1">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="img"
                        src="https://flagcdn.com/us.svg"
                        alt="US"
                        sx={{ width: 24, height: 16 }}
                      />
                      +1
                    </Box>
                  </MenuItem>
                  <MenuItem value="+963">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="img"
                        src="https://flagcdn.com/sy.svg"
                        alt="SY"
                        sx={{ width: 24, height: 16 }}
                      />
                      +963
                    </Box>
                  </MenuItem>
                  <MenuItem value="+44">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="img"
                        src="https://flagcdn.com/gb.svg"
                        alt="UK"
                        sx={{ width: 24, height: 16 }}
                      />
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
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      '& fieldset': { borderColor: '#ddd' },
                      '&:hover fieldset': { borderColor: '#999' },
                      '&.Mui-focused fieldset': { borderColor: '#EC2323' }
                    }
                  }}
                />
              </Box>
            </Box>
          </>
        );
      
      case 2:
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>
              Step 2: Additional Information
            </Typography>
            <Typography sx={{ color: '#666', mb: 3 }}>
              This step would collect additional restaurant details such as cuisine type, opening hours, etc.
            </Typography>
          </Box>
        );
      
      case 3:
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>
              Step 3: Payment Setup
            </Typography>
            <Typography sx={{ color: '#666', mb: 3 }}>
              This step would handle payment and subscription information.
            </Typography>
          </Box>
        );
      
      case 4:
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>
              Step 4: Confirmation
            </Typography>
            <Typography sx={{ color: '#666', mb: 3 }}>
              Review your information and complete the registration.
            </Typography>
          </Box>
        );
      
      default:
        return null;
    }
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
            flex: 1,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 4, md: 8 }
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '400px' }}>
            {/* Step Indicators */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              {[1, 2, 3, 4].map((num) => (
                <Box
                  key={num}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: step === num ? '#EC2323' : step > num ? '#4caf50' : '#e0e0e0',
                    color: step >= num ? 'white' : '#999',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  {step > num ? '✓' : num}
                </Box>
              ))}
            </Box>

            {/* Form Title */}
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 4,
                color: '#333'
              }}
            >
              Tell us about your restaurant
            </Typography>

            {/* Form Fields */}
            <Box component="form">
              {renderStepContent()}

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
                {step === 4 ? 'Submit' : 'Next'}
              </Button>

              {/* Login Link */}
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

        {/* Right Side - Illustration */}
        <Box 
          sx={{ 
            flex: 1,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 4, md: 8 },
            position: 'relative'
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              component="img"
              src="/logo.svg"
              alt="termbi"
              sx={{
                height: '40px',
                mb: 2
              }}
            />
            <Typography 
              sx={{ 
                fontSize: '0.95rem',
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
              src="assets\Regester\illustration.svg"
              alt="Restaurant Management"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '20px'
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
