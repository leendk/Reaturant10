import { Box } from "@mui/material";
import TermbiNavbar from "./TermbiNavbar";
import TermbiFooter from "./TermbiFooter";
import { Outlet } from "react-router-dom";


export default function TermbiLayout() {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <TermbiNavbar />
    
      <Outlet />   {/* هنا سيتم عرض الهوم أو الكارت */}
      <TermbiFooter />
    </Box>
  );
}
