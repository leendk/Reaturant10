import { useState } from 'react';
import { Box, Typography, IconButton, Popover } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function DatePicker({ selectedDate, onSelectDate }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleSelectDay = (day) => {
    if (day) {
      const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      onSelectDate(selected);
      handleClose();
    }
  };

  const formatDate = (date) => {
    if (!date) return 'Select Date';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const isSelected = (day) => {
    if (!selectedDate || !day) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const days = getDaysInMonth(currentMonth);

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
            borderColor: '#EB7A00',
          },
        }}
      >
        <Typography sx={{ fontSize: '14px', color: selectedDate ? '#333' : '#999' }}>
          {formatDate(selectedDate)}
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
        <Box sx={{ p: 2, width: 280 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <IconButton onClick={handlePrevMonth} size="small">
              <KeyboardArrowLeftIcon />
            </IconButton>
            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </Typography>
            <IconButton onClick={handleNextMonth} size="small">
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 0.5,
              mb: 1,
            }}
          >
            {weekDays.map((day) => (
              <Typography
                key={day}
                sx={{
                  textAlign: 'center',
                  fontSize: '11px',
                  color: '#999',
                  fontWeight: 500,
                  py: 0.5,
                }}
              >
                {day}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 0.5,
            }}
          >
            {days.map((day, index) => (
              <Box
                key={index}
                onClick={() => handleSelectDay(day)}
                sx={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  cursor: day ? 'pointer' : 'default',
                  backgroundColor: isSelected(day)
                    ? '#EB7A00'
                    : isToday(day)
                    ? '#ffebee'
                    : 'transparent',
                  color: isSelected(day) ? '#fff' : '#333',
                  fontSize: '13px',
                  fontWeight: isToday(day) ? 600 : 400,
                  '&:hover': day
                    ? {
                        backgroundColor: isSelected(day) ? '#EB7A00' : '#f5f5f5',
                      }
                    : {},
                }}
              >
                {day}
              </Box>
            ))}
          </Box>
        </Box>
      </Popover>
    </>
  );
}
