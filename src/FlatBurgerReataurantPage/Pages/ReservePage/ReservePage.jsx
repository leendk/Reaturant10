import { useState } from 'react';
import { Box, Typography, Dialog } from '@mui/material';
import ReservationTypeCard from './components/ReservationTypeCard';
import ReservationForm from './components/ReservationForm';

export default function ReservePage() {
  const [selectedType, setSelectedType] = useState('table');
  

  // Common fields
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({
  from: '',
  to: ''
});

  const [guests, setGuests] = useState('');
  const [notes, setNotes] = useState('');

  // Fields for multiple tables
  const [tablesNumber, setTablesNumber] = useState('');
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleReserve = () => {
  setDialogOpen(true);

  // يغلق تلقائياً بعد 2 ثانية
  setTimeout(() => {
    setDialogOpen(false);
  }, 2000);
};

  // Fields for event reservation
  const [eventType, setEventType] = useState('');
  const [decoration, setDecoration] = useState('');

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

 

  return (
    <Box sx={{ backgroundColor: '#fff', minHeight: '100vh' }}>

      <Box sx={{ maxWidth: 1000, mx: 'auto', px: 4, py: 4 }}>
        <Box sx={{ backgroundColor: '#fff', borderRadius: '12px', p: 4 }}>
          
          <Typography sx={{ fontSize: '24px', fontWeight: 600, color: '#333', mb: 4 }}>
            <span style={{ color: '#EB7A00' }}>Reserve</span> Details
          </Typography>

          <ReservationTypeCard
            selectedType={selectedType}
            onSelectType={setSelectedType}
          />

          {/** ----------------- Dynamic Form ------------------ */}
          <ReservationForm
            selectedType={selectedType}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            selectedTime={selectedTime}
            onSelectTime={setSelectedTime}
            guests={guests}
            onGuestsChange={setGuests}
            notes={notes}
            onNotesChange={setNotes}
            tablesNumber={tablesNumber}
            onTablesNumberChange={setTablesNumber}
            eventType={eventType}
            onEventTypeChange={setEventType}
            decoration={decoration}
            onDecorationChange={setDecoration}
            onSubmit={handleReserve}
          />
        </Box>
      </Box>

      {/* Success Dialog */}
      <Dialog
        open={dialogOpen}
        PaperProps={{
          sx: {
            padding: 3,
            borderRadius: 3,
            textAlign: "center",
            backgroundColor: "#E7F8E9", // أخضر فاتح
            border: "2px solid #4CAF50", // أخضر غامق
          }
        }}
      >
        <Typography sx={{ color: "#2E7D32", fontSize: 18, fontWeight: 600 }}>
          Reservation submitted successfully!
        </Typography>
      </Dialog>

    </Box>
  );
}
