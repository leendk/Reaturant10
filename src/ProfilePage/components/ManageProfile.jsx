import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";

export default function ManageProfile() {
  const [formData, setFormData] = useState({
    firstName: "Ahmad",
    lastName: "Al-Ahmad",
    username: "Ahmad",
    phone: "+966 50 258 0981",
    email: "Ahmad@gmail.com",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setSnackbar({
      open: true,
      message: "Changes saved successfully!",
      severity: "success",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        p: 4,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ---------- Title ---------- */}
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#333",
          mb: 3,
        }}
      >
        Manage Profile
      </Typography>

      {/* ---------- Profile Image + Name ---------- */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Avatar
          src="https://i.pravatar.cc/100?img=12"
          sx={{
            width: 55,
            height: 55,
            backgroundColor: "#E0E0E0",
            mr: 2,
            fontSize: "22px",
            color: "#555",
          }}
        >
          AA
        </Avatar>

        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: 600, color: "#333" }}>
            {formData.firstName} {formData.lastName}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#E53935",
              mt: 0.5,
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Change image
          </Typography>
        </Box>
      </Box>

      {/* ---------- Form Fields Grid ---------- */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "260px 260px" }, // نفس عرض الحقول بالصورة
          columnGap: 20, // تباعد أفقي بين الحقلين
          rowGap: 4, // تباعد عمودي بين الصفوف
          mb: 4,
        }}
      >
        {/* First Name */}
        <Box>
          <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 1 }}>
            First name
          </Typography>
          <TextField
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            size="small"
            sx={{
              width: "260px",
              "& .MuiInputBase-root": { height: 40 },
            }}
          />
        </Box>

        {/* Last Name */}
        <Box>
          <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 1 }}>
            Last name
          </Typography>
          <TextField
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            size="small"
            sx={{
              width: "260px",
              "& .MuiInputBase-root": { height: 40 },
            }}
          />
        </Box>

        {/* Username */}
        <Box>
          <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 1 }}>
            Username
          </Typography>
          <TextField
            name="username"
            value={formData.username}
            onChange={handleChange}
            size="small"
            sx={{
              width: "260px",
              "& .MuiInputBase-root": { height: 40 },
            }}
          />
        </Box>

        {/* Phone */}
        <Box>
          <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 1 }}>
            Phone
          </Typography>
          <TextField
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            size="small"
            sx={{
              width: "260px",
              "& .MuiInputBase-root": { height: 40 },
            }}
          />
        </Box>
      </Box>

      {/* Email Field */}
      <Box sx={{ width: "260px", mb: 4 }}>
        <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 1 }}>
          Email
        </Typography>
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          size="small"
          sx={{
             width: "260px",
            "& .MuiInputBase-root": { height: 40 },
          }}
        />
      </Box>

      {/* ---------- Spacer pushes button down ---------- */}
      <Box sx={{ flexGrow: 1 }} />

      {/* ---------- Save Button (Centered) ---------- */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          onClick={handleSave}
          sx={{
            backgroundColor: "#E53935",
            color: "#fff",
            px: 6,
            py: 1.3,
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#C62828" },
          }}
        >
          Save Change
        </Button>
      </Box>

      {/* ---------- Snackbar ---------- */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
