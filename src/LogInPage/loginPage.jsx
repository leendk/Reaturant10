import { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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

            {/* Title */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 10,
                color: "#333",
                textAlign: "center",
              }}
            >
              Log in
            </Typography>


            {/* Email */}
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#333",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Email <span style={{ color: "#EC2323" }}>*</span>
              </Typography>

              <TextField
                fullWidth
                type="email"
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ddd" },
                    "&:hover fieldset": { borderColor: "#999" },
                    "&.Mui-focused fieldset": { borderColor: "#EC2323" },
                  },
                }}
              />
            </Box>


            {/* Password */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#333",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Password <span style={{ color: "#EC2323" }}>*</span>
              </Typography>

              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ddd" },
                    "&:hover fieldset": { borderColor: "#999" },
                    "&.Mui-focused fieldset": { borderColor: "#EC2323" },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ mr: "-6px" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </Box>

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#EC2323",
                color: "white",
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                fontWeight: 600,
                mb: 3,
                borderRadius: "6px",
                "&:hover": { backgroundColor: "#c41f1f" },
              }}
            >
              Log in
            </Button>

            {/* Register Link */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              New in termbi?{" "}
              <Link
                to="/RestaurantRegester/step1"
                style={{
                    color: "#EC2323",
                    fontWeight: 600,
                    textDecoration: "none",
                }}
                >
                Register
                </Link>

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
