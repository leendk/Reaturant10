import { Box, Typography, Button, Divider } from '@mui/material';
import { useCart } from "../../../../../context/CartContext.jsx";
import { useNavigate } from 'react-router-dom';


const paymentMethods = [
  { name: 'Visa', image: '/assets/payment/visa.svg' },
  { name: 'Mastercard', image: '/assets/payment/masterCard.svg' },
  { name: 'PayPal', image: '/assets/payment/paypal.svg' },
  { name: 'Payoneer', image: '/assets/payment/payoneer.svg' },
  { name: 'Google Pay', image: '/assets/payment/G pay.svg' },
];

export default function OrderSummary() {
  const { getCartTotal } = useCart();
  const navigate = useNavigate();


  const totalPrice = getCartTotal();
  const deliveryFee = 30;
  const grandTotal = totalPrice + deliveryFee;

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          p: 3,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: '18px', mb: 3 }}>
          Order Summary
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography sx={{ color: '#666' }}>Total Price</Typography>
          <Typography sx={{ fontWeight: 600, color: '#EB7A00' }}>{totalPrice}$</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography sx={{ color: '#666' }}>Delivery</Typography>
          <Typography sx={{ fontWeight: 600, color: '#EB7A00' }}>{deliveryFee}$</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography sx={{ fontWeight: 600 }}>Grand Total</Typography>
          <Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#EB7A00' }}>
            {grandTotal}$
          </Typography>
        </Box>

        <Button
        variant="contained"
        fullWidth
        onClick={() =>
            navigate('/FlatBurger/checkout', {
            state: {
                totalPrice,
                deliveryFee,
                grandTotal,
            },
            })
        }
        sx={{
            backgroundColor: '#EB7A00',
            color: '#fff',
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '16px',
            '&:hover': {
            backgroundColor: '#c47521ff',
            },
        }}
        >
        Checkout
        </Button>


      </Box>

      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          p: 3,
          mt: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <Typography sx={{ textAlign: 'center', color: '#171717', mb: 2}}>
          We Accept
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            gap: 2.5,
            flexWrap: 'wrap',
          }}
        >
          {paymentMethods.map((method) => (
            <Box
              key={method.name}
              component="img"
              src={method.image}
              alt={method.name}
              sx={{
                height: 40,
                objectFit: 'contain',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
