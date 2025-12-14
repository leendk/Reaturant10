import { Box } from "@mui/material";
import FlatBurgerNavbar from "./FlatBurgerNavbar";
import FlatBurgerFooter from "./FlatBurgerFooter";
import { Outlet } from "react-router-dom";

export default function FlatBurgerLayout() {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <FlatBurgerNavbar />
      
      <Outlet />   {/* هنا سيتم عرض الهوم أو الكارت */}

      <FlatBurgerFooter />
    </Box>
  );
}
