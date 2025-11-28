import { Box, Typography } from '@mui/material';

export default function AboutUs() {
  return (
    <Box
      sx={{
        padding: '50px 60px',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: '700',
          color: '#333',
          mb: 3,
          fontSize: '35px',
        }}
      >
        <span style={{ color: '#EB7A00' }}>About </span>us
      </Typography>

      <Typography
        sx={{
          color: '#666',
          fontSize: '18px',       
          lineHeight: 1.7,        
          maxWidth: '760px',
          margin: '0 auto',
          textAlign: 'center',    // ← لتحافظ على التموضع
        }}
      >
        Welcome to <span style={{ color: '#EB7A00', fontWeight: '600' }}>FLAT BURGUR</span>, 
        where culinary excellence meets warm hospitality.
        <br />
        Our journey began with a passion for creating unforgettable dining experiences.
        <br />
        At <span style={{ color: '#EB7A00', fontWeight: '600' }}>FLAT BURGUR</span>, 
        we believe in using the freshest ingredients to craft dishes that delight the senses.
      </Typography>

    </Box>
  );
}
