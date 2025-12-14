import {
  Box,
  InputBase,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const countries = [
  { name: "USA", flag: "https://flagcdn.com/us.svg" },
  { name: "Syria", flag: "https://flagcdn.com/sy.svg" },
];

export default function HomeNavbar() {
  // ------------------------ STATE ------------------------
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { getCartCount } = useCart();

  // ------------------------ FUNCTIONS ------------------------
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    closeMenu();
  };

  // ------------------------ RETURN ------------------------
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 40px",
        backgroundColor: "#1A1F2B",
      }}
    >
      {/* LEFT → Logo + Search */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, flex: 1 }}>
        {/* Logo */}
        <Link to="/home">
          <Box>
            <Box
              component="img"
              src="/logo.svg"
              alt="termbi"
              sx={{ height: "23px", objectFit: "contain" }}
            />
          </Box>
        </Link>

        {/* Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "6px",
            padding: "6px 15px",
            width: "420px",
            maxWidth: "50%",
            border: "1px solid #ddd",
          }}
        >
          <SearchIcon sx={{ color: "#777", mr: 1 }} />
          <InputBase
            placeholder="Search for any product"
            sx={{ flex: 1, fontSize: "14px" }}
          />
        </Box>
      </Box>

      {/* RIGHT ICONS */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "22px" }}>
        {/* Cart */}
        <Badge
          badgeContent={getCartCount()}
          color="error"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/Termbi/cart")}
        >
          <ShoppingCartOutlinedIcon
            sx={{ color: "white", cursor: "pointer", fontSize: 26 }}
          />
        </Badge>

        {/* Country Dropdown */}
        <Box>
          <Box
            onClick={openMenu}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Box
              component="img"
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              sx={{ width: 40, height: 20 }}
            />

            <KeyboardArrowDownIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            {countries.map((country) => (
              <MenuItem
                key={country.name}
                onClick={() => selectCountry(country)}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <Box
                  component="img"
                  src={country.flag}
                  alt={country.name}
                  sx={{ width: 30, height: 20 }}
                />
                {country.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* User */}
        <IconButton
          component={Link}
          to="/profile" // <-- هنا مسار صفحة البروفايل
          sx={{
            padding: "4px",
            borderRadius: "6px",
            mr: 1,
          }}
        >
          <PersonOutlineOutlinedIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
