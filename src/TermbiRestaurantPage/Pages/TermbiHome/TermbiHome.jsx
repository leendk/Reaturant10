import { Box } from '@mui/material';;
import HomeHero from '../../Layout/TermbiHero';
import AboutUs from '../../Layout/AboutUs';
import MenuSection from '../../Layout/MenuSection';
export default function TermbiHome() {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <HomeHero />
      <AboutUs />
      <MenuSection />
     
    </Box>
  );
}
