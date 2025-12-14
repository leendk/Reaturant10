import { Box, Typography, Button, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

export default function HomeHero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: { xs: "30px 20px", md: "40px 60px" },
        backgroundColor: " #FFF8F8",
        flexWrap: "wrap",
        gap: "40px",
        minHeight: "400px",
      }}
    >
      {/* النصوص */}
      <Box
        sx={{
          flex: "1",
          minWidth: "280px",
          maxWidth: "450px",
          pt: 2,
          ml: { xs: "12px", md: "50px" },
        }}
      >
        {/* العنوان الرئيسي */}
        <Typography
          sx={{
            fontWeight: "800",
            color: "#333",
            mb: 4,
            fontSize: { xs: "32px", md: "40px" }, // ← حجم أكبر
            lineHeight: 1.25,
            whiteSpace: "nowrap",
          }}
        >
          Best <span style={{ color: "#E53935" }}>Food</span>, Best{" "}
          <span style={{ color: "#E53935" }}>Services!</span>
        </Typography>

        {/* الوصف */}
        <Typography
          sx={{
            color: "#555",
            fontSize: { xs: "18px", md: "20px" }, // ← حجم أكبر
            mb: 4,
            lineHeight: 1.8,
            fontWeight: 600,
          }}
        >
          Sandwiches, Fries & Burger with best <br />
          taste awaits you.
        </Typography>

        {/* الموقع */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: 2 }}>
          <LocationOnIcon sx={{ color: "#E53935", fontSize: "26px" }} />

          <Typography
            component="a"
            href="#"
            sx={{
              color: "#157CD8",
              fontSize: { xs: "16px", md: "18px" },
              textDecoration: "underline",
              textUnderlineOffset: "4px", // ← يجعل الخط أجمل مثل الصورة
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            2255 Nw 2nd Ave, Miami, FL 37214
          </Typography>
        </Box>

        {/* التقييم */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 3 }}>
          <Typography
            sx={{ color: "#333", fontSize: { xs: "16px", md: "18px" } }} // ← أكبر
          >
            Rating:
          </Typography>

          <Rating
            value={5}
            readOnly
            size="large" // ← حجم نجوم أكبر
            sx={{ color: "#FFD700" }}
          />

          <Typography
            sx={{ color: "#333", fontSize: { xs: "16px", md: "18px" } }} // ← أكبر
          >
            5.0
          </Typography>
        </Box>

        {/* الزر */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E62424",
            color: "#fff",
            borderRadius: "10px",
            width: "290px",
            padding: "10px 0",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "600",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
            "&:hover": {
              backgroundColor: "#C91F1F",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
            },
          }}
          onClick={() => navigate("/Termbi/reserve")}
        >
          Reserve a table
        </Button>
      </Box>

      {/* الصورة */}
      <Box
        sx={{
          flex: 1,
          minWidth: { xs: "280px", md: "400px" },
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mr: { xs: 0, md: "-60px" },
          mt: { xs: "-20px", md: "-40px" },
        }}
      >
        <Box
          sx={{
            width: { xs: 300, md: 520 },
            height: { xs: 300, md: 520 },
            clipPath: "circle(65% at 65% 50%)",
            overflow: "hidden",
            animation: `zoomShake 1.8s ease-out`,
            "@keyframes zoomShake": {
              "0%": { transform: "scale(0.25)", opacity: 0 },
              "60%": { transform: "scale(1.08)", opacity: 1 },
              "80%": { transform: "scale(0.98) rotate(1deg)" },
              "90%": { transform: "scale(1.01) rotate(-1deg)" },
              "100%": { transform: "scale(1) rotate(0deg)" },
            },
          }}
        >
          <Box
            component="img"
            src="/Rectangle 7519.svg"
            alt="Termbi special dishes"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scaleX(-1)", // يعكس الصورة لتظهر من الجهة المعاكسة
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
