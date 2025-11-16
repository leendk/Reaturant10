import { Box } from "@mui/material";
import PricingCard from "./PricingCard";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100%'
    }}>
      <div style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        backgroundColor: '#f5f5f5'
      }}>
        <PricingCard />
      </div>
      <Footer/>
    </div>
  );
}
