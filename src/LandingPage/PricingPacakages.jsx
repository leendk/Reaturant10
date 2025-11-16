import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function PricingPackages() {
  const packages = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"],
      headerBg: "#ffe6e6",
      highlight: false,
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
      ],
      headerBg: "#ef5350",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$75",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"],
      headerBg: "#ffe6e6",
      highlight: false,
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
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
            gap: 10,
            flexWrap: "wrap"
          }}
        >
          {packages.map((pkg, index) => (
            <Card
              key={index}
              sx={{
                width: 280,
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                overflow: "visiable",
                position: "relative",
                transform: pkg.highlight ? "scale(1.08)" : "scale(1)",
                transition: "0.3s"
              }}
            >
              {/* ====== HEADER ====== */}
              <Box
                sx={{
                  position: "relative",
                  height: 140,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* الشكل المنحني */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "130%",
                    height: 120,
                    backgroundColor: pkg.headerBg,
                    clipPath: "path('M0,70 C120,-10 380,20 500,100 L500,0 L0,0 Z')",
                    zIndex: 1
                  }}
                />



              {/* النص فوق المنحني */}
              <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: pkg.highlight ? "white" : "#333"
                  }}
                >
                  {pkg.name}
                </Typography>

                <Box sx={{ mt: 1 }}>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      fontWeight: 700,
                      color: pkg.highlight ? "white" : "#333"
                    }}
                  >
                    {pkg.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      ml: 1,
                      color: pkg.highlight ? "rgba(255,255,255,0.9)" : "#666"
                    }}
                  >
                    {pkg.period}
                  </Typography>
                </Box>
              </Box>
                </Box>


              {/* ====== BODY ====== */}
              <CardContent sx={{ textAlign: "center", mt: 2 }}>
                <List sx={{ mb: 3 }}>
                  {pkg.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleOutlineIcon
                          sx={{
                            fontSize: "1rem",
                            color: pkg.highlight ? "#ef9a9a" : "#ef5350"
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          color: "#666"
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: pkg.highlight ? "#ef5350" : "#fff",
                    color: pkg.highlight ? "#fff" : "#ef5350",
                    borderRadius: "8px",
                    py: 1.3,
                    textTransform: "none",
                    fontWeight: 600,
                    border: pkg.highlight ? "none" : "1px solid #ef5350",
                    "&:hover": {
                      backgroundColor: pkg.highlight
                        ? "#d32f2f"
                        : "rgba(239,83,80,0.1)"
                    }
                  }}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
