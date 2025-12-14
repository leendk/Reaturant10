import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip } from '@mui/material';

const bookingsData = [
  {
    id: '11120087',
    date: '20-07-2024',
    time: '14:30',
    guests: '20',
    status: 'Confirmed',
  },
  {
    id: '11119910',
    date: '20-07-2024',
    time: '20:00',
    guests: '10',
    status: 'Canceled',
  },
  {
    id: '11119807',
    date: '20-07-2024',
    time: '12:00',
    guests: '6',
    status: 'Confirmed',
  },
  {
    id: '11119694',
    date: '20-07-2024',
    time: '23:00',
    guests: '7',
    status: 'Canceled',
  },
  {
    id: '11119511',
    date: '20-07-2024',
    time: '18:00',
    guests: '15',
    status: 'Confirmed',
  },
];

export default function MyBookings() {
  const getStatusColor = (status) => {
    return status === 'Confirmed' ? '#4CAF50' : '#F44336';
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#333', mb: 3 }}>
        My bookings
      </Typography>

      <Box sx={{ flex: 1 }}>
        <TableContainer>
          <Table
            sx={{
              borderCollapse: "separate",
              borderSpacing: "0 30px", // ← مسافات بين الصفوف
            }}
          >
            <TableHead>
              <TableRow>
                {["Booking ID", "Date", "Time", "Guests", "Status", "Details"].map((title) => (
                  <TableCell
                    key={title}
                    align="center"
                    sx={{
                      fontWeight: 600,
                      color: '#666',
                      fontSize: '12px',
                      borderBottom: "none",
                    }}
                  >
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {bookingsData.map((booking) => (
                <TableRow
                  key={booking.id}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                  }}
                >
                  <TableCell align="center" sx={{ fontSize: '12px', color: '#666', borderBottom: 'none' }}>
                    {booking.id}
                  </TableCell>

                  <TableCell align="center" sx={{ fontSize: '12px', color: '#666', borderBottom: 'none' }}>
                    {booking.date}
                  </TableCell>

                  <TableCell align="center" sx={{ fontSize: '12px', color: '#666', borderBottom: 'none' }}>
                    {booking.time}
                  </TableCell>

                  <TableCell align="center" sx={{ fontSize: '12px', color: '#666', borderBottom: 'none' }}>
                    {booking.guests}
                  </TableCell>

                  <TableCell align="center" sx={{ borderBottom: 'none' }}>
                    <Chip
                      label={booking.status}
                      sx={{
                        backgroundColor: getStatusColor(booking.status),
                        color: '#fff',
                        fontSize: '11px',
                        fontWeight: 600,
                        height: '24px',
                      }}
                    />
                  </TableCell>

                  <TableCell align="center" sx={{ borderBottom: 'none' }}>
                    <Button
                      sx={{
                        fontSize: '11px',
                        color: '#E53935',
                        textTransform: 'none',
                        fontWeight: 600,
                      }}
                    >
                      View details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: 2 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: '4px',
              backgroundColor: '#E53935',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            1
          </Box>

          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: '4px',
              backgroundColor: '#F5F5F5',
              color: '#666',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            2
          </Box>

          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: '4px',
              backgroundColor: '#F5F5F5',
              color: '#666',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            3
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
