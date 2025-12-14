import { Box, Typography, Avatar, List, ListItem, ListItemButton, Divider } from '@mui/material';
import { AccountCircle, ShoppingBag, EventNote, Star, Logout } from '@mui/icons-material';

export default function ProfileSidebar({ activeTab, onTabChange }) {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        p: 3,
        width: '240px',
        minHeight: '750px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* User Info */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          src="https://i.pravatar.cc/100?img=12"
          sx={{
            width: 70,
            height: 70,
            mx: 'auto',
            mb: 1.5,
            borderRadius: '50%',
          }}
        />

        <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#222' }}>
          Ahmad Al-Ahmad
        </Typography>
      </Box>

      {/* Menu */}
      <List sx={{ p: 0 }}>
        <ListItem sx={{ p: 0, mb: 1 }}>
          <ListItemButton
            onClick={() => onTabChange('profile')}
            sx={{
              borderRadius: '8px',
              backgroundColor: activeTab === 'profile' ? '#FFF6F6' : 'transparent',
              color: activeTab === 'profile' ? '#E53935' : '#555',
              height: '42px',
            }}
          >
            <AccountCircle sx={{ mr: 2, fontSize: '19px' }} />
            <Typography sx={{ fontSize: '14px' }}>Manage Profile</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ p: 0, mb: 1 }}>
          <ListItemButton
            onClick={() => onTabChange('orders')}
            sx={{
              borderRadius: '8px',
              backgroundColor: activeTab === 'orders' ? '#FFF6F6' : 'transparent',
              color: activeTab === 'orders' ? '#E53935' : '#555',
              height: '42px',
            }}
          >
            <ShoppingBag sx={{ mr: 2, fontSize: '19px' }} />
            <Typography sx={{ fontSize: '14px' }}>My Order</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ p: 0, mb: 1 }}>
          <ListItemButton
            onClick={() => onTabChange('bookings')}
            sx={{
              borderRadius: '8px',
              backgroundColor: activeTab === 'bookings' ? '#FFF6F6' : 'transparent',
              color: activeTab === 'bookings' ? '#E53935' : '#555',
              height: '42px',
            }}
          >
            <EventNote sx={{ mr: 2, fontSize: '19px' }} />
            <Typography sx={{ fontSize: '14px' }}>My bookings</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ p: 0, mb: 1 }}>
          <ListItemButton
            onClick={() => onTabChange('reviews')}
            sx={{
              borderRadius: '8px',
              backgroundColor: activeTab === 'reviews' ? '#FFF6F6' : 'transparent',
              color: activeTab === 'reviews' ? '#E53935' : '#555',
              height: '42px',
            }}
          >
            <Star sx={{ mr: 2, fontSize: '19px' }} />
            <Typography sx={{ fontSize: '14px' }}>My Reviews</Typography>
          </ListItemButton>
        </ListItem>
      </List>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ my: 2 }} />

      {/* Logout Bottom */}
      <ListItem sx={{ p: 0 }}>
        <ListItemButton
          sx={{
            borderRadius: '8px',
            color: '#444',
            height: '38px',
          }}
        >
          <Logout sx={{ mr: 2, fontSize: '18px' }} />
          <Typography sx={{ fontSize: '14px' }}>Log out</Typography>
        </ListItemButton>
      </ListItem>
    </Box>
  );
}
