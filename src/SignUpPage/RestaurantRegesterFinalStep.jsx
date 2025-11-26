import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

export default function RestaurantRegesterFinalStep() {
  const step = 4;
  const navigate = useNavigate();

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
       {/* Left Side - Success Message */}
        <Box 
          sx={{ 
            flex: 0.9,
            backgroundColor: '#FFF8F8',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            p: { xs: 4, md: 8 }
          }}
        >

          <Box sx={{ width: '100%', maxWidth: '450px', textAlign: 'center', mt: 4 }}>

            {/* TOP TITLE */}
            <Typography 
              sx={{ 
                color: '#21c58e', 
                fontSize: '2rem', 
                fontWeight: 700, 
                mb: 6
              }}
            >
              Congratulations!
            </Typography>

            {/* Step Indicators */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 6, 
                justifyContent: 'center' 
              }}
            >
              {[1, 2, 3, 4].map((num, index) => (
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
                      backgroundColor: '#21c58e',
                      color: 'white',
                      boxShadow: '0 2px 6px rgba(33, 197, 142, 0.3)'
                    }}
                  >
                    {num === 4 ? '✓' : num}
                  </Box>

                  {index < 3 && (
                    <Box
                      sx={{
                        width: '65px',
                        height: '3px',
                        backgroundColor: '#21c58e',
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* MAIN SUCCESS TEXT */}
            <Typography sx={{ color: '#21c58e', fontSize: '1.3rem', fontWeight: 600, mb: 1 }}>
              Your account has created successfully!
            </Typography>

            <Typography sx={{ color: '#444', fontSize: '1.05rem', fontWeight: 600, mb: 12 }}>
              Get your restaurant started
            </Typography>

            {/* EMAIL MESSAGE */}
            <Typography sx={{ color: '#777', fontSize: '0.95rem', mb: 1 }}>
              A verification code has been sent to your email.
            </Typography>

            <Typography sx={{ color: '#777', fontSize: '0.95rem' }}>
              Please verify your account via email.  
              <span style={{ color: '#EC2323', cursor: 'pointer', fontWeight: '600' }}> Open my email</span>
            </Typography>

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
