        import { Box, Typography, Container } from '@mui/material';

        export default function Features() {
          return (
            <Box sx={{ py: 8, backgroundColor: '#fff' }}>
              <Container maxWidth="lg">

                {/* TITLE WITH LOGO */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    color: "#333"
                  }}
                >
                  <img
                    src="/Group.svg"
                    alt="termbi logo"
                    style={{ width: "110px", height: "auto" }}
                  />
                  <span style={{ fontWeight: 600,fontSize: "32px" }}>Features</span>
                </Typography>

                {/* CONTENT SECTION */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 4,
                    alignItems: { md: 'center' },
                    flexDirection: { xs: 'column', md: 'row' }
                  }}
                >
                  <Box sx={{ flex: { xs: 1, md: '0 0 40%' } }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#333',
                         mt: { md: -15 }  
                      }}
                    >
                      Dashboard
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        fontSize: '18px',       
                        lineHeight: 1.8,        
                        textAlign: 'justify',
                      }}
                    >
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                      <br />
                      Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
                      <br/>
                      Dolore Magna Aliqua. Ut  Enim Ad Minim Veniam, 
                      <br/>
                      Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                      <br/>
                      Aliquip Ex Ea Commodo Consequat.
                    </Typography>

                  </Box>

                  <Box sx={{ flex: { xs: 1, md: '0 0 55%' } }}>
                    <Box
                      component="img"
                      src="/dashboard.png"
                      alt="Dashboard Features"
                      sx={{
                        width: '90%',       
                        height: 'auto',     
                        display: 'block',
                        margin: '0 auto'    
                      }}
                    />
                  </Box>

                </Box>

              </Container>
            </Box>
          );
        }
