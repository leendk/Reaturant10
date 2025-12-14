import { Box } from '@mui/material';

const reservationTypes = [
  {
    id: 'table',
    title: 'Reserve a table',
    image: '/assets/reserve/a table.svg',
  },
  {
    id: 'multiple',
    title: 'Reserve multiple tables',
    image: '/assets/reserve/tables.svg',
  },
  {
    id: 'restaurant',
    title: 'Reserve all restaurant',
    image: '/assets/reserve/all.svg',
  },
  {
    id: 'event',
    title: 'Reserve for Event',
    image: '/assets/reserve/Event.svg',
  },
];

export default function ReservationTypeCard({ selectedType, onSelectType }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        mb: 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {reservationTypes.map((type) => (
        <Box
          key={type.id}
          onClick={() => onSelectType(type.id)}
          sx={{
            width: 180,
            height: 180,
            border: selectedType === type.id ? '2px solid #EB7A00' : '1px solid #ddd',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: selectedType === type.id ? '#FFF8F8' : '#fff',
            overflow: 'hidden', // 🔥 مهم لجعل الصورة داخل الحدود
            '&:hover': {
              borderColor: '#EB7A00',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={type.image}
            alt={type.title}
            sx={{
              width: '100%',
              height: '110%',
              objectFit: 'cover', // 🔥 يجعل الصورة تملأ الكارد بالكامل
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
