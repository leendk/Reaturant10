import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const countries = [
  { name: "USA", flag: "https://flagcdn.com/us.svg" },
  { name: "Syria", flag: "https://flagcdn.com/sy.svg" },
];

export default function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // USA initially

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    closeMenu();
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(45, 45, 45, 0.8)',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: 4 }}>

        {/* Logo */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            color: 'white',
            fontWeight: 400,
            letterSpacing: 1
          }}
        >
          <Box
            component="img"
            src="/logo.svg"
            alt="termbi"
            sx={{
              height: '20px',
              objectFit: 'contain',
              display: 'inline-flex',
              ml: 5
            }}
          />
        </Typography>


        {/* Navigation + Dropdown + Login */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>

          <Typography component="a" href="#home" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: '#ef5350' } }}>
            Home
          </Typography>

          <Typography component="a" href="#services" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: '#ef5350' } }}>
            Services
          </Typography>

          <Typography component="a" href="#about" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: '#ef5350' } }}>
            About us
          </Typography>

          <Typography component="a" href="/contact"
            sx={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: '#ef5350' } }}
          >
            Contact us
          </Typography>



          {/* 🌍 Language Dropdown */}
          <Box>
            <Box
              onClick={openMenu}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                px: 1.5,
                py: 0.5,
              }}
            >
              <Box
                component="img"
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                sx={{ width: 40, height: 20 }}
              />

              {/* هنا السهم */}
              <KeyboardArrowDownIcon 
                sx={{ color: 'white', fontSize: 20 }} 
              />
            </Box>


            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              {countries.map((country) => (
                <MenuItem 
                  key={country.name} 
                  onClick={() => selectCountry(country)}
                  sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
                >
                  <Box
                    component="img"
                    src={country.flag}
                    alt={country.name}
                    sx={{ width: 30, height: 20 }}
                  />
                  {country.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* Login Button */}
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              textTransform: 'none',
              fontSize: '0.80rem',     // تصغير الخط مثل الصورة
              px: 3,                 // عرض أصغر
              py: 0.5, 
              minWidth: '70px',        // يجعل الزر بنفس الطول الظاهر
              borderRadius: '10px',     // نفس الحواف الموجودة بالصورة
              borderWidth: 'px',      // حد رفيع مثل الصورة
              '&:hover': {
                borderColor: '#ef5350',
                backgroundColor: 'rgba(239, 83, 80, 0.1)',
              }
            }}
          >
            Log in
          </Button>


        </Box>
      </Toolbar>
    </AppBar>
  );
}
