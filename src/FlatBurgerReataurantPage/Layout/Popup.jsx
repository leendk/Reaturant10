import { Box, Typography, Modal, Button, IconButton, TextField, MenuItem, Dialog } from "@mui/material";
import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "../../context/CartContext.jsx";

export default function Popup({ open, onClose, item }) {
  if (!item) return null;

  const [value, setValue] = useState("default");
  const [count, setCount] = useState(1);
  const [popupOpen, setPopupOpen] = useState(false);
  const [addedItemName, setAddedItemName] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    if (popupOpen) {
      const timer = setTimeout(() => setPopupOpen(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [popupOpen]);

  const handleAddToCart = (e, item) => {
    addToCart(item, count);
    setAddedItemName(item.name);
    setPopupOpen(true);
  };

  return (
    <>
      {/* MAIN POPUP */}
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "900px",
            bgcolor: "white",
            borderRadius: "15px",
            p: 3,
            display: "flex",
            gap: "25px",
            outline: "none",
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
              width: "350px",
              height: "350px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          {/* CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: "22px", fontWeight: "700", color: "#333" }}>
              {item.name}
            </Typography>

            <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "#EB7A00", mt: 1 }}>
              {item.price} $
            </Typography>

            <Typography sx={{ color: "#777", fontSize: "15px", mt: 1, width: "90%" }}>
              {item.description}
            </Typography>

            {/* OPTIONS */}
            <Typography sx={{ mt: 3, mb: 1, fontWeight: "600" }}>
              Product Option
            </Typography>

            <TextField
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="outlined"
              sx={{
                width: "260px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="default" sx={{ justifyContent: "center" }}>
                Choose Option
              </MenuItem>

              {[
                { label: "Extra sauce", price: 5 },
                { label: "With Mushrooms", price: 5 },
                { label: "With Ketchup", price: 5 },
                { label: "Extra Cream", price: 5 },
              ].map((op) => (
                <MenuItem key={op.label} value={op.label}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <span>{op.label}</span>
                    <span style={{ color: "red", fontWeight: "500" }}>+ {op.price}$</span>
                  </Box>
                </MenuItem>
              ))}
            </TextField>

            {/* SPECIAL REQUEST */}
            <Typography sx={{ mt: 3, mb: 1, fontWeight: "600" }}>
              Special Request
            </Typography>

            <TextField
              fullWidth
              placeholder="Tell Us If You Have: An Allergy, An Ingredient You Don't Like, Etc."
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                height: "50px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            />

            {/* ADD TO CART + COUNTER */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
              <Button
                onClick={(e) => handleAddToCart(e, item)}
                variant="contained"
                sx={{
                  backgroundColor: "#EB7A00",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  width: "48%",
                  height: "45px",
                  "&:hover": { backgroundColor: "#cc791fff" },
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3,
                }}
              >
                <span>Add to Cart</span>
                <span>{item.price}$</span>
              </Button>

              {/* COUNTER */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                  height: "48px",
                  px: 2,
                  minWidth: "140px",
                }}
              >
                <IconButton onClick={() => count > 1 && setCount(count - 1)}>
                  <RemoveIcon sx={{ fontSize: "18px" }} />
                </IconButton>

                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#EB7A00",
                    width: "40px",
                    textAlign: "center",
                  }}
                >
                  {count}
                </Typography>

                <IconButton onClick={() => setCount(count + 1)}>
                  <AddIcon sx={{ fontSize: "18px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* SUCCESS POPUP */}
      <Dialog
        open={popupOpen}
        PaperProps={{
          sx: {
            backgroundColor: "#4CAF50",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            width: "260px",
            color: "white",
          },
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
          ✔ Added Successfully
        </Typography>

        <Typography sx={{ fontSize: "14px", mt: 1 }}>
          {addedItemName} was added to cart!
        </Typography>
      </Dialog>
    </>
  );
}
