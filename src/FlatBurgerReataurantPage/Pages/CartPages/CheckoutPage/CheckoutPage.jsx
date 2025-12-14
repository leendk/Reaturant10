import { useState } from 'react';
import {Box, Typography,TextField,Button,Radio,RadioGroup,FormControlLabel,Snackbar,Alert,Divider} from '@mui/material';
import CartProgress from "../components/CartProgress.jsx";
import { useLocation,  Link  } from "react-router-dom";


export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    paymentMethod: 'credit-card',
  });

  const { state } = useLocation();
  const totalPrice = state?.totalPrice || 0;
  const deliveryFee = state?.deliveryFee || 0;
  const grandTotal = state?.grandTotal || 0;

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.cardholderName || !formData.cardNumber || !formData.expirationDate || !formData.cvv) {
      setSnackbar({
        open: true,
        message: 'Please fill in all payment details',
        severity: 'error'
      });
      return;
    }

    setSnackbar({
      open: true,
      message: 'Order placed successfully!',
      severity: 'success'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ backgroundColor: '#fff', minHeight: '100vh' }}>
    

      <Box sx={{ maxWidth: 1000, mx: 'auto', px: 4, py: 4 }}>
        <CartProgress currentStep={1} />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 350px' },
            gap: 4,
            mt: 4,
          }}
        >

          {/* LEFT COLUMN */}
          <Box
            sx={{
              backgroundColor: '#FFFCFC',
              borderRadius: '16px',
              p: 5,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#333',
                mb: 4,
                textAlign: 'center',
              }}
            >
              Payment Details
            </Typography>

            {/* Cardholder Name */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#333', mb: 1 }}>
                Cardholder Name
              </Typography>
              <TextField
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleChange}
                placeholder="Enter cardholder name"
                fullWidth
                variant="outlined"
                size="small"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px', height: '48px' } }}
              />
            </Box>

            {/* Card Number */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#666', mb: 1 }}>
                Card Number
              </Typography>
              <TextField
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                fullWidth
                variant="outlined"
                size="small"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px', height: '48px' } }}
              />
            </Box>

            {/* Expiration & CVV */}
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 4 }}>
              <Box>
                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#666', mb: 1 }}>
                  Expiration Date
                </Typography>
                <TextField
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px', height: '48px' } }}
                />
              </Box>

              <Box>
                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#666', mb: 1 }}>
                  CVV
                </Typography>
                <TextField
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px', height: '48px' } }}
                />
              </Box>
            </Box>
          </Box>

          {/* RIGHT COLUMN (Order Summary + Payment Method) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

            {/* Order Summary */}
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                p: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                border: '1px solid #f0f0f0',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#333',
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Order Summary
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography sx={{ color: '#666' }}>Total Price</Typography>
                <Typography sx={{ fontWeight: 600, color: '#EB7A00' }}>
                  {totalPrice}$
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography sx={{ color: '#666' }}>Delivery</Typography>
                <Typography sx={{ fontWeight: 600, color: '#EB7A00' }}>
                  {deliveryFee}$
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '17px' }}>Grand Total</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#EB7A00' }}>
                  {grandTotal}$
                </Typography>
              </Box>
            </Box>

            {/* Choose Payment Method */}
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                p: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#333',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Choose Payment Method
              </Typography>

              <RadioGroup value={formData.paymentMethod} onChange={handlePaymentChange}>
                <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
                <FormControlLabel value="google-pay" control={<Radio />} label="Google Pay" />
              </RadioGroup>
            </Box>

          </Box>
        </Box>

        {/* Place Order Button */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button
            component={Link}
            to="/FlatBurger/place-order"
            state={{
                cardholderName: formData.cardholderName,
                cardNumber: formData.cardNumber,
                totalPrice,
                deliveryFee,
                grandTotal,
            }}
            sx={{
                backgroundColor: '#EB7A00',
                color: '#fff',
                px: 12,
                py: 1.8,
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '16px',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#c07627ff' },
            }}
            >
            Place order
            </Button>

        </Box>
      </Box>

   

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ borderRadius: '8px' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
