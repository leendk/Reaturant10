import { Box, Typography, Modal, Button, IconButton, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function Popup({ open, onClose, item }) {

  if (!item) return null;

  const [value, setValue] = useState("default");
  const [count, setCount] = useState(1); // ← عداد يعمل

  return (
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

        {/* الصورة */}
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

        {/* المحتوى */}
        <Box sx={{ flex: 1 }}>

          <Typography sx={{ fontSize: "22px", fontWeight: "700", color: "#333" }}>
            {item.name}
          </Typography>

          <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "#E53935", mt: 1 }}>
            {item.price} $
          </Typography>

          <Typography sx={{ color: "#777", fontSize: "15px", mt: 1, width: "90%" }}>
            {item.description}
          </Typography>

          {/* Product Option */}
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
              "& .MuiOutlinedInput-root": {
                height: "48px",
                borderRadius: "16px",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: value === "default" ? "center" : "flex-start",
                textAlign: value === "default" ? "center" : "left",
              },
              "& .MuiSelect-select": {
                textAlign: value === "default" ? "center" : "left",
                paddingLeft: value === "default" ? 0 : "16px",
              },
              "& .MuiSvgIcon-root": {
                color: "#999",
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
            ].map((item) => (
              <MenuItem key={item.label} value={item.label}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                  <span>{item.label}</span>
                  <span style={{ color: "red", fontWeight: "500" }}>+ {item.price}$</span>
                </Box>
              </MenuItem>
            ))}
          </TextField>

          {/* Special Request */}
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
              "& .MuiInputBase-root": {
                height: "50px",
                paddingLeft: "16px",
                paddingRight: "16px",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#B3B3B3",
                opacity: 1,
              },
            }}
          />

          {/* Add to Cart + Counter */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>

            {/* زر "Add to Cart" */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E53935",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "8px",
                width: "48%",
                height: "45px",
                "&:hover": { backgroundColor: "#C62828" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 3,
              }}
            >
              <span>Add to Cart</span>
              <span>{item.price}$</span>
            </Button>

            {/* العداد — مطابق للصورة */}
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
              {/* – */}
              <IconButton
                onClick={() => count > 1 && setCount(count - 1)}
                sx={{ color: "black", p: "4px" }}
              >
                 <RemoveIcon sx={{ fontSize: "18px" }} /> 
              </IconButton>

              {/* خط فاصل */}
              <Box sx={{ width: "1px", height: "60%", bgcolor: "#e0e0e0", mx: 1 }} />

              {/* الرقم */}
              <Typography sx={{ fontSize: "20px", fontWeight: "400", color: "red", minWidth: "30px", textAlign: "center" }}>
                {count}
              </Typography>

              {/* خط فاصل */}
              <Box sx={{ width: "1px", height: "60%", bgcolor: "#e0e0e0", mx: 1 }} />

              {/* + */}
              <IconButton
                onClick={() => setCount(count + 1)}
                 sx={{ color: "black", p: "4px" }}  
              >
               <AddIcon sx={{ fontSize: "18px" }} />
              </IconButton>
            </Box>

          </Box>

        </Box>
      </Box>
    </Modal>
  );
}
