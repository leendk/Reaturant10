import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import CartProgress from "../components/CartProgress.jsx";
import { useCart } from "../../../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems } = useCart();
  const [selectedItems, setSelectedItems] = useState(
    cartItems.map((item) => item.id)
  );
  const navigate = useNavigate();

  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 4, py: 4 }}>
        <CartProgress currentStep={0} />

        {cartItems.length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 10,
              backgroundColor: '#fff',
              borderRadius: '12px',
            }}
          >
            <Typography sx={{ fontSize: '24px', color: '#999', mb: 2 }}>
              Your cart is empty
            </Typography>
            <Typography sx={{ color: '#666' }}>
              Add some delicious items from our menu!
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 350px' },
              gap: 4,
            }}
          >
            <Box>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  selected={selectedItems.includes(item.id)}
                  onSelect={handleSelectItem}
                />
              ))}
            </Box>

            <Box>
              <OrderSummary />
            </Box>
          </Box>
        )}
      </Box>

      {/* زر العودة */}
      <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        <Button
          variant="contained"
          onClick={() => navigate('/Termbi')}
          sx={{
            backgroundColor: "#EC2323",
            "&:hover": { backgroundColor: "#C91F1F" },
            color: "#fff",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "600",
            borderRadius: "10px",
            px: 4,
            py: 1.5,
          }}
        >
          ⬅ Back to Home
        </Button>
      </Box>
    </>
  );
}
