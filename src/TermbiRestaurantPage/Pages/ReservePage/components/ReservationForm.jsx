import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

export default function ReservationForm({
  selectedType,
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
  guests,
  onGuestsChange,
  notes,
  onNotesChange,
  tablesNumber,
  onTablesNumberChange,
  eventType,
  onEventTypeChange,
  decoration,
  onDecorationChange,
  onSubmit
}) {
  return (
    <Box sx={{ mt: 4 }}>

      {/* Layout: 2 Columns */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 4
      }}>

        {/* LEFT COLUMN */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

          {/* Booking date */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography sx={{ width: 130 }}>Booking date</Typography>
            <DatePicker
              selectedDate={selectedDate}
              onSelectDate={onSelectDate}
            />
          </Box>

            {/* Booking Time */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography sx={{ width: 130 }}>Booking Time</Typography>

            {selectedType === "restaurant" ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>

                {/* From */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ fontSize: 14, color: "#555", whiteSpace: "nowrap" }}>
                    From
                    </Typography>

                    <TimePicker
                    selectedTime={selectedTime.from}
                    onSelectTime={(value) =>
                        onSelectTime({ ...selectedTime, from: value })
                    }
                    />
                </Box>

                {/* To */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ fontSize: 14, color: "#555", whiteSpace: "nowrap" }}>
                    To
                    </Typography>

                    <TimePicker
                    selectedTime={selectedTime.to}
                    onSelectTime={(value) =>
                        onSelectTime({ ...selectedTime, to: value })
                    }
                    />
                </Box>

                </Box>
            ) : (
                <TimePicker
                selectedTime={selectedTime.from}
                onSelectTime={(value) =>
                    onSelectTime({ from: value, to: "" })
                }
                />
            )}
            </Box>


          {/* Dynamic fields based on type */}
        {selectedType === "multiple" && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Typography sx={{ width: 130, fontWeight: 500 }}>
                Tables number
                </Typography>

                <TextField
            select
            size="small"
            value={tablesNumber === undefined ? "" : tablesNumber}
            onChange={(e) => onTablesNumberChange(e.target.value)}
            SelectProps={{
                displayEmpty: true,
                renderValue: (selected) => {
                if (selected === "") {
                    return <span style={{ color: "#999" }}>Select Number</span>;
                }
                return selected;
                }
            }}
            sx={{
                minWidth: 180,
                backgroundColor: "#fff",
                borderRadius: "10px",
                '& .MuiOutlinedInput-root': {
                height: 48,
                borderRadius: "10px",
                '& fieldset': { borderColor: "#e5e5e5" },
                '&:hover fieldset': { borderColor: "#EC2323" },
                '&.Mui-focused fieldset': { borderColor: "#EC2323" }
                },
                '& .MuiSelect-select': {
                padding: "10px 14px",
                fontSize: 14
                }
            }}
            >
            <MenuItem value="">
                <span style={{ color: "#999" }}>Select Number</span>
            </MenuItem>

            {[1, 2, 3, 4, 5, 6].map((num) => (
                <MenuItem key={num} value={num}>{num}</MenuItem>
            ))}
            </TextField>

            </Box>
            )}


          {selectedType === "event" && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Typography sx={{ width: 130 }}>Type of event</Typography>
              <TextField
  select
  size="small"
  value={eventType}
  onChange={(e) => onEventTypeChange(e.target.value)}
  SelectProps={{
    displayEmpty: true,
    renderValue: (value) =>
      value !== "" ? value : <span style={{ color: "#9e9e9e" }}>Select Event</span>,
  }}
  sx={{
    minWidth: 150,
    backgroundColor: "#fff",
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      height: 48,             // ← نفس ارتفاع الصورة
      borderRadius: "10px",
      "& fieldset": {
        borderColor: "#e5e5e5",
      },
      "&:hover fieldset": {
        borderColor: "#EC2323",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#EC2323",
      },
    },
  }}
>
  <MenuItem value="birthday">Wedding</MenuItem>
  <MenuItem value="meeting">Birthday</MenuItem>
  <MenuItem value="wedding">Graduation</MenuItem>
  <MenuItem value="party">Party</MenuItem>
</TextField>



              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Typography sx={{ width: 130 }}>Decoration</Typography>
               <TextField
  select
  size="small"
  value={decoration}
  onChange={(e) => onDecorationChange(e.target.value)}
  SelectProps={{
    displayEmpty: true,
    renderValue: (value) =>
      value !== "" ? value : <span style={{ color: "#9e9e9e" }}>Select decoration</span>,
  }}
  sx={{
    minWidth: 100,
    backgroundColor: "#fff",
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      height: 48,
      borderRadius: "10px",
      "& fieldset": {
        borderColor: "#e5e5e5",
      },
      "&:hover fieldset": {
        borderColor: "#EC2323",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#EC2323",
      },
    },
  }}
>
  <MenuItem value="Wedding décor">Wedding décor</MenuItem>
  <MenuItem value="Birthday décor">Birthday décor</MenuItem>
  <MenuItem value="Graduation décor">Graduation décor</MenuItem>
  <MenuItem value="Galaxy décor">Galaxy décor</MenuItem>
  <MenuItem value="Old Europe décor">Old Europe décor</MenuItem>
  <MenuItem value="Others">Others</MenuItem>
</TextField>

              </Box>
            </>
          )}

          {/* Guests */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography sx={{ width: 100 }}>Guests</Typography>
            <TextField
                type="number"
                placeholder="Enter number"
                value={guests}
                onChange={(e) => onGuestsChange(e.target.value)}
                size="small"
                sx={{
                    minWidth: 80,
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    '& .MuiOutlinedInput-root': {
                    height: 48,
                    borderRadius: "10px",
                    '& fieldset': { borderColor: "#e5e5e5" },
                    '&:hover fieldset': { borderColor: "#EC2323" },
                    '&.Mui-focused fieldset': { borderColor: "#EC2323" }
                    }
                }}
                />

          </Box>

        </Box>

        {/* RIGHT COLUMN: Notes */}
        <Box>
  <Typography sx={{ mb: 1, fontWeight: 500 }}>Notes</Typography>

  <TextField
    multiline
    rows={4}
    fullWidth
    placeholder="Enter your notes, important details or special request"
    value={notes}
    onChange={(e) => onNotesChange(e.target.value)}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        padding: 0,
        '& fieldset': {
          borderColor: '#ddd',
        },
        '&:hover fieldset': {
          borderColor: '#EC2323',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#EC2323',
        }
      },
      '& textarea': {
        padding: '15px',
        fontSize: '14px',
        resize: 'none', // يمنع التكبير أسفل اليمين مثل الصورة
      }
    }}
  />
</Box>

      </Box>

      {/* BUTTON CENTER */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mt: 4
      }}>
        <Button
          onClick={onSubmit}
          variant="contained"
          sx={{
            backgroundColor: '#EC2323',
            minWidth: 200,
            padding: '10px 0',
            borderRadius: '8px',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#C91F1F' }
          }}
        >
          Reserve Now
        </Button>
      </Box>

    </Box>
  );
}
