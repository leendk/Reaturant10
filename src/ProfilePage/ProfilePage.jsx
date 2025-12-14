import { useState } from 'react';
import { Link } from "react-router-dom";

import { Box } from '@mui/material';
import TermbiNavbar from '../TermbiRestaurantPage/Layout/TermbiNavbar';
import TermbiFooter from '../TermbiRestaurantPage/Layout/TermbiFooter';
import ProfileSidebar from './components/ProfileSidebar';
import ManageProfile from './components/ManageProfile';
import MyOrders from './components/MyOrders';
import MyBookings from './components/MyBookings';
import MyReviews from './components/MyReviews';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  // 🔥 دالة تُرجع آخر عنصر في الـ Breadcrumb حسب التاب المختار
  const getLastCrumb = () => {
    switch (activeTab) {
      case "profile":
        return "Manage Profile";
      case "orders":
        return "My Order";
      case "bookings":
        return "My Bookings";
      case "reviews":
        return "My Reviews";
      default:
        return "Manage Profile";
    }
  };

  // 🔥 عرض المحتوى حسب التاب
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ManageProfile />;
      case 'orders':
        return <MyOrders />;
      case 'bookings':
        return <MyBookings />;
      case 'reviews':
        return <MyReviews />;
      default:
        return <ManageProfile />;
    }
  };

  return (
    <Box sx={{ backgroundColor: '#FFFCFC', minHeight: '100vh' }}>
      <TermbiNavbar />

      {/* Main Container */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 4, py: 4 }}>

        {/* 🔥 Breadcrumb ديناميكي */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, fontSize: "15px" }}>

          <Link 
            to="/" 
            style={{ 
              color: "#BDBDBD", 
              textDecoration: "none" 
            }}
          >
            Home
          </Link>

          <Box sx={{ color: "#BDBDBD" }}>{">"}</Box>

          {/* My Profile ثابت */}
          <Box sx={{ color: "#9E9E9E" }}>My Profile</Box>

          <Box sx={{ color: "#BDBDBD" }}>{">"}</Box>

          {/* 🔥 آخر عنصر يتغير حسب activeTab */}
          <Box sx={{ color: "#000", fontWeight: 600 }}>
            {getLastCrumb()}
          </Box>

        </Box>

        {/* Page Layout */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '250px 1fr' }, 
          gap: 4 
        }}>
          <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <Box>{renderContent()}</Box>
        </Box>

      </Box>

      <TermbiFooter />
    </Box>
  );
}
