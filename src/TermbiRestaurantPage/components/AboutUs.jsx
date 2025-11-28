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
        About <span style={{ color: '#E53935' }}>us</span>
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
        Welcome to <span style={{ color: '#E53935', fontWeight: '600' }}>Termbi</span>, 
        where culinary excellence meets warm hospitality.
        <br />
        Our journey began with a passion for creating unforgettable dining experiences.
        <br />
        At <span style={{ color: '#E53935', fontWeight: '600' }}>Termbi</span>, 
        we believe in using the freshest ingredients to craft dishes that delight the senses.
      </Typography>

    </Box>
  );
}
