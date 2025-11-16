import { Box } from "@mui/material";
import PricingCard from "./TrustedRestaurants"
import TrustedRestaurants from "./TrustedRestaurants";
import PricingPackages from "./PricingPacakages";
import Features from "./Features";
import Footer from "./Footer";


export default function LandingPage() {
  return (
    <Box>
      <
      <TrustedRestaurants />
      <PricingPackages />
      <Features />
      <Footer />
    </Box>
  );
}
