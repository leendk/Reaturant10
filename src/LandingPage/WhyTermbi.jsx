import { Box, Typography, Container } from '@mui/material';

export default function WhyTermbi() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#fff' }}>
      <Container maxWidth="md">

        <Box
          sx={{
            position: 'relative',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            p: 5,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          {/* الدائرة العلوية اليسار */}
          <Box
            sx={{
              position: 'absolute',
              top: -40,
              left: -40,
              width: '140px',
              height: '140px',
              backgroundColor: '#ffe6e6',
              borderRadius: '50%',
              opacity: 0.5
            }}
          />

          {/* الدائرة السفلية اليمين */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -50,
              right: -50,
              width: '180px',
              height: '180px',
              backgroundColor: '#f2f2f2',
              borderRadius: '50%',
              opacity: 0.7
            }}
          />

          {/* العنوان */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: '#333',
              mb: 6,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1
            }}
          >
            <span style={{ color: '#e64a4a' }}>Why</span>

            <Box
              component="img"
              src="/Group.svg"
              alt="termbi"
              sx={{
                height: '40px',
                objectFit: 'contain',
                display: 'inline-flex'
              }}
            />
          </Typography>


          {/* النص */}
          <Typography
            sx={{
              color: '#555',
              textAlign: 'center',
              fontSize: '1.05rem',
              lineHeight: 2,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Termbi's booking tool allows guests to check table availability in real time and then
            book a table with just a few clicks. Even outside of your business hours. Your effort:
            Low. Your benefit: Up to 30% more bookings.
            <br />
            With Termbi, you are instantly listed on over <strong>100 national and international platforms.</strong>
          </Typography>

        </Box>
      </Container>
    </Box>
  );
}
