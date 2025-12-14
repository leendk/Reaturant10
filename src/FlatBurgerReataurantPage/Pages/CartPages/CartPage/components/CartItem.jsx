import { Box, Typography, IconButton, Checkbox } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from "../../../../../context/CartContext.jsx";
import { useState } from 'react';

export default function CartItem({ item, selected, onSelect }) {
  const { updateQuantity, removeFromCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const originalPrice = Math.round(item.price * 1.2);
  const discountPercent = Math.round(((originalPrice - item.price) / originalPrice) * 100);

  // Ensure image path starts with / for public folder
  const getImageSrc = () => {
    if (!item.image) return '';
    return item.image.startsWith('/') ? item.image : `/${item.image}`;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFCFC',
        borderRadius: '12px',
        p: 2,
        mb: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <Checkbox
        checked={selected}
        onChange={() => onSelect(item.id)}
        sx={{
          color: '#EB7A00',
          '&.Mui-checked': {
            color: '#EB7A00',
          },
        }}
      />

      {imageError || !item.image ? (
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: '8px',
            ml: 1,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e0e0e0',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              color: '#999',
              textAlign: 'center',
              px: 1,
              mt: 10
            }}
          >
            {item.name}
          </Typography>
        </Box>
      ) : (
        <Box
          component="img"
          src={getImageSrc()}
          alt={item.name}
          onError={handleImageError}
          sx={{
            width: 120,
            height: 120,
            borderRadius: '8px',
            objectFit: 'cover',
            ml: 1,
          }}
        />
      )}

      <Box sx={{ flex: 1, ml: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '16px', color: '#333', mt: 2  }}>
              {item.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1.5 }}>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#fff',
                  backgroundColor: '#EB7A00',
                  px: 0.8,
                  py: 0.2,
                  borderRadius: '4px',
                }}
              >
                {discountPercent}%
              </Typography>
              <Typography
                sx={{
                  fontSize: '13px',
                  color: '#999',
                  textDecoration: 'line-through',
                }}
              >
                {originalPrice}$
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#EB7A00',
                mt: 2,
              }}
            >
              {item.price}$
            </Typography>
          </Box>

          <IconButton
            onClick={() => removeFromCart(item.id)}
            sx={{
              color: '#999',
              '&:hover': {
                color: '#EB7A00',
              },
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 1,
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            sx={{
              border: '1px solid #ddd',
              width: 28,
              height: 28,
              '&:hover': {
                borderColor: '#EB7A00',
                color: '#EB7A00',
              },
            }}
          >
            <RemoveIcon sx={{ fontSize: 16 }} />
          </IconButton>

          <Typography sx={{ minWidth: 30, textAlign: 'center', fontWeight: 600 }}>
            {item.quantity}
          </Typography>

          <IconButton
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            sx={{
              border: '1px solid #ddd',
              width: 28,
              height: 28,
              '&:hover': {
                borderColor: '#EB7A00',
                color: '#EB7A00',
              },
            }}
          >
            <AddIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
