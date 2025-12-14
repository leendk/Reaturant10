import { Box, Typography, Button } from "@mui/material";
import CartProgress from "../components/CartProgress.jsx";



export default function ConfirmOrderPage() {
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
 

      {/* Breadcrumb */}
      <Box sx={{ maxWidth: 1000, mx: 'auto', px: 4, py: 4 }}>
              <CartProgress currentStep={4} />

     <Box sx={{ width: "650px", mx: "auto", mt: 6, textAlign: "center", pb: 10 }}>

  {/* IMAGE ONLY */}
      <Box
        component="img"
        src="/Group 5060 1.svg"
        alt="success icon"
        sx={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          mx: "auto",
          mb: 3,
          display: "block",
        }}
      />

      <Typography
        sx={{ fontSize: "24px", fontWeight: 600, color: "#5D5D5D", mb: 4 }}
      >
        Confirmation ordered Successfully
      </Typography>

      <Button
        onClick={() => (window.location.href = "/Termbi#EC2323")}
        sx={{
          backgroundColor: '#EC2323',
          color: "#fff",
          px: 6,
          py: 1.2,
          borderRadius: "6px",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: "#C91F1F" },
        }}
      >
        Go Home
      </Button>
    </Box>


      
    </Box>
    </Box>
  );
}
