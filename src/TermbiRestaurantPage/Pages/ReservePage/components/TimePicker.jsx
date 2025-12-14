import { useState } from 'react';
import { Box, Typography, Popover } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hourStr = hour.toString().padStart(2, '0');
      const minStr = minute.toString().padStart(2, '0');
      slots.push(`${hourStr}:${minStr}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export default function TimePicker({ selectedTime, onSelectTime }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectTime = (time) => {
    onSelectTime(time);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '10px 15px',
          minWidth: 150,
          cursor: 'pointer',
          backgroundColor: '#fff',
          '&:hover': {
            borderColor: '#EC2323',
          },
        }}
      >
        <Typography sx={{ fontSize: '14px', color: selectedTime ? '#333' : '#999' }}>
          {selectedTime || 'Select Time'}
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: '#999', fontSize: 20 }} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            mt: 1,
          },
        }}
      >
        <Box sx={{ p: 2, width: 400, maxHeight: 300, overflow: 'auto' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 1,
            }}
          >
            {timeSlots.map((time) => (
              <Box
                key={time}
                onClick={() => handleSelectTime(time)}
                sx={{
                  py: 1,
                  px: 1.5,
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: selectedTime === time ? '2px solid #EC2323' : '1px solid #eee',
                  backgroundColor: selectedTime === time ? '#EC2323' : '#fff',
                  color: selectedTime === time ? '#fff' : '#333',
                  fontSize: '13px',
                  fontWeight: selectedTime === time ? 600 : 400,
                  transition: 'all 0.15s ease',
                  '&:hover': {
                    borderColor: '#EC2323',
                    backgroundColor: selectedTime === time ? '#EC2323' : '#FFF8F8',
                  },
                }}
              >
                {time}
              </Box>
            ))}
          </Box>
        </Box>
      </Popover>
    </>
  );
}
