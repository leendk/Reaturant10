          import { Box, Typography, Container } from '@mui/material';
          import TavernaLogo from '../../assets/about/Taverna.svg';
          import MeltyWayLogo from '../../assets/about/melty-way.svg';
          import GoodTestLogo from '../../assets/about/good-test.svg';
          import SparroLogo from '../../assets/about/sparro.svg';
          import AldenaiteLogo from '../../assets/about/aldenaite.svg';

          export default function TrustedRestaurants() {
            const restaurants = [
              { name: 'Taverna', logo: TavernaLogo },
              { name: 'Melty Way', logo: MeltyWayLogo },
              { name: 'Good Taste', logo: GoodTestLogo },
              { name: 'Sbarro', logo: SparroLogo },
              { name: 'Aldenaite', logo: AldenaiteLogo }
            ];

            return (
              <Box sx={{ py: 6, backgroundColor: '#fff' }}>
                <Container maxWidth="lg">
                  <Typography 
                    variant="h6" 
                    align="center" 
                    sx={{ 
                      mb: 5,
                      color: '#333',
                      fontWeight: 400,
                      fontSize: '0.95rem'
                    }}
                  >
                    restaurants already trust in <span style={{ fontWeight: 600 }}>termbi</span>
                  </Typography>

                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2
                  }}>
                    {restaurants.map((restaurant, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          overflow: 'hidden',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#fff',
                          opacity: 0.7,
                          transition: 'opacity 0.5s',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',

                          '&:hover': { opacity: 3 }
                        }}
                      >
                        <Box
                          component="img"
                          src={restaurant.logo}
                          alt={restaurant.name}
                          sx={{
                            width: '120%',
                            height: '120%',
                            objectFit: 'contain'
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                </Container>
              </Box>
            );
          }
