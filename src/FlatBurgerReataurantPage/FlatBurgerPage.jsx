import { Box } from '@mui/material';
import FlatBurgerNavbar from './components/FlatBurgerNavbar';
import FlatBurgerHero from './components/FlatBurgerHero';
import AboutUs from './components/AboutUs';
import MenuSection from './components/MenuSection';
import FlatBurgerFooter from './components/FlatBurgerFooter';

export default function Termbi() {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <FlatBurgerNavbar />
      <FlatBurgerHero />
      <AboutUs />
      <MenuSection />
      <FlatBurgerFooter />
    </Box>
  );
}
