import { Box } from "@mui/material";

import FlatBurgerHero from "../../Layout/FlatBurgerHero";
import AboutUs from "../../Layout/AboutUs";
import MenuSection from "../../Layout/MenuSection";

export default function FlatBurgerHome() {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <FlatBurgerHero />
      <AboutUs />
      <MenuSection />
    </Box>
  );
}
