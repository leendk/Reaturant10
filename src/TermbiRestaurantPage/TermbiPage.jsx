import { Box } from '@mui/material';
import HomeNavbar from './components/TermbiNavbar';
import HomeHero from './components/TermbiHero';
import AboutUs from './components/AboutUs';
import MenuSection from './components/MenuSection';
import HomeFooter from './components/TermbiFooter';

export default function Termbi() {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <HomeNavbar />
      <HomeHero />
      <AboutUs />
      <MenuSection />
      <HomeFooter />
    </Box>
  );
}
