import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyTermbi from "./WhyTermbi";
import PricingPackages from "./PricingPacakages";
import Features from "./Features";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <WhyTermbi />
      <PricingPackages />
      <Features />
      <Footer />
    </Box>
  );
}
