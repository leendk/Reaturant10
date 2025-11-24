import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { useState } from "react";

export default function PricingPackages() {
  const [selected, setSelected] = useState(null);

  const headerDefault = "#fce4ec";
  const borderDefault = "#f48fb1";
  const activeColor = "#ef5350";

  const packages = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"]
    },
    {
      name: "Premium",
      price: "$45",
      period: "/month",
      features: [
        "Reservation",
        "Ordering",
        "Metering",
        "Services",
        "Services",
        "Services"
      ]
    },
    {
      name: "Enterprise",
      price: "$75",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"]
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">

        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 5,
            color: "#333",
            fontWeight: 600
          }}
        >
          <span style={{ color: "#ef5350" }}>Pricing</span> Packages
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 13,
            flexWrap: "wrap"
          }}
        >
          {packages.map((pkg, index) => {
            const isActive = selected === index;

            return (
                <Card
                  key={index}
                  onClick={() => setSelected(index)}
                  sx={{
                    width: 260,
                    borderRadius: "12px",
                    minHeight: "auto",
                    height: "auto !important",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "0.3s",
                    
                    transform: isActive ? "scale(1.06)" : "scale(1)",

                    outline: "none",         // ⬅️ يمنع اختفاء النص
                    "&:focus": { outline: "none" }, // ⬅️ يمنع التركيز
                    "&:active": { outline: "none" }, // ⬅️ يمنع إعادة الرسم وقت الضغط
                  }}
                  tabIndex={-1}  // ⬅️ يمنع focus بالكامل
                >

                {/* HEADER */}
                <Box
                  sx={{
                    position: "relative",
                    backgroundColor: isActive ? activeColor : headerDefault,
                    padding: "22px 22px 48px 22px",
                    transition: "0.3s"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontWeight: 600,
                      color: isActive ? "#fff" : "#333"
                    }}
                  >
                    {pkg.name}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "40px",
                        fontWeight: 700,
                        color: isActive ? "#fff" : "#333"
                      }}
                    >
                      {pkg.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: isActive ? "#ffeaea" : "#666"
                      }}
                    >
                      {pkg.period}
                    </Typography>
                  </Box>

                  {/* --- SAME CURVE ALWAYS ---*/}
                  <svg
                    style={{
                      position: "absolute",
                      bottom: "-1px",
                      left: 0,
                      width: "100%",
                      height: "55px"
                    }}
                    viewBox="0 0 400 60"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,0 
                         C60,60 180,60 260,30 
                         C320,10 355,0 400,0 
                         L400,60 L0,60 Z"
                      fill="white" 
                    />



                  </svg>
                </Box>

                {/* BODY */}
                <CardContent sx={{ padding: "18px 22px 22px 22px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {pkg.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5
                        }}
                      >
                        <Box
                          sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            border: `2px solid ${
                              isActive ? "#ef5350" : borderDefault
                            }`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Check
                            sx={{
                              fontSize: "14px",
                              color: isActive ? "#ef5350" : borderDefault
                            }}
                          />
                        </Box>

                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#555" ,
                            fontWeight: 500
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    fullWidth
                    sx={{
                      backgroundColor: isActive ? "#ef5350": headerDefault,
                      borderRadius: "12px",
                      fontSize: "16px",
                      mt: 3,
                      padding: "10px",
                      fontWeight: 600,
                      color:  '#000',
                      textTransform: "none",
                      transition: "0.3s"
                    }}
                  >
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
