import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const steps = ['Cart', 'Checkout', 'Place order', 'Confirm Order'];

export default function CartProgress({ currentStep = 0 }) {
  const navigate = useNavigate();

  // دالة للتنقل عند الضغط على أي خطوة
  const handleStepClick = (index) => {
    if (index === 0) navigate('/Termbi/cart');
    if (index === 1) navigate('/Termbi/checkout');
    if (index === 2) navigate("/Termbi/place-order");
    if (index === 3) navigate('/Termbi/confirm-order');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        py: 2,
        mb: 3,
      }}
    >
      {steps.map((step, index) => (
        <Box
          key={step}
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => handleStepClick(index)}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: index === currentStep ? 600 : 400,
              color: index === currentStep ? '#333' : '#999',
              cursor: 'pointer',
              '&:hover': {
                color: '#EC2323',
              },
            }}
          >
            {step}
          </Typography>

          {index < steps.length - 1 && (
            <Typography sx={{ mx: 1, color: '#ccc' }}>/</Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
