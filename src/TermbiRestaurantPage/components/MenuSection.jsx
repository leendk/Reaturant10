import { useState, useMemo } from 'react';
import { Box, Typography, Button, Tabs, Tab, IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import MenuItemPopup from './Popup';

const menuCategories = ['Popular', 'Salad', 'Pasta', 'Sandwiches', 'Sandwiches', 'Pizza', 'Burger', 'Juice'];

const menuItems = [
  {
    id: 1,
    name: 'Shrimp Pasta',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 50,
    image: 'assets/Restauratnt/Rectangle 7315.png',
  },
  {
    id: 2,
    name: 'Pasta Primavera',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 70,
    image: 'assets/Restauratnt/Rectangle 7315 (1).png',
  },
  {
    id: 3,
    name: 'Summer Pasta Salad',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 36,
    image: 'assets/Restauratnt/Rectangle 7315 (2).png',
  },
  {
    id: 4,
    name: 'Creamy Chicken Alfredo',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 45,
    image: 'assets/Restauratnt/Rectangle 7315 (3).png',
  },
  {
    id: 5,
    name: 'Pasta-Rezepte',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 85,
    image: 'assets/Restauratnt/Rectangle 7315 (4).png',
  },
  {
    id: 6,
    name: 'Creamy Tomato',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 60,
    image: 'assets/Restauratnt/Rectangle 7315 (5).png',
  },
  {
    id: 7,
    name: 'Creamy Ranch Pasta',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 65,
    image: 'assets/Restauratnt/Rectangle 7315 (6).png',
  },
  {
    id: 8,
    name: 'Pink Sauce Pasta',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 32,
    image: 'assets/Restauratnt/Rectangle 7315 (7).png',
  },
  {
    id: 9,
    name: 'Nuts And Peas',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 95,
    image: 'assets/Restauratnt/Rectangle 7315 (8).png',
  },
  {
    id: 10,
    name: 'Cold Italian Pasta',
    description: 'The Shrimp Version Of Arugula Russo Dish, Clams Mixed With Pasta, Tomatoes And Garlic.',
    price: 55,
    image: 'assets/Restauratnt/Rectangle 7315 (9).png',
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('cards');
  const [sortBy, setSortBy] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = (item) => {
    setSelectedItem(item);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const sortedItems = useMemo(() => {
    const items = [...menuItems];
    if (sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      items.sort((a, b) => a.price - b.price);
    }
    return items;
  }, [sortBy]);

  return (
    <>
      <Box sx={{ padding: '40px 60px', backgroundColor: '#fff' }}>
        
        {/* ===== TITLE ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: '700',
            color: '#333',
            mb: 2,
            textAlign: 'center',
            fontSize: '35px',
          }}
        >
          Our <span style={{ color: '#E53935' }}>Menu</span>
        </Typography>

        <Typography
          sx={{
            color: '#666',
            fontSize: '18px',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Explore our special, tasteful dishes on the Restaurant Menu!
        </Typography>

        {/* ===== TABS ===== */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          </Box>
         {/* ===== SORT & VIEW BUTTONS ===== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          {/* View as Cards */}
          <Button
            variant={viewMode === "cards" ? "contained" : "outlined"}
            startIcon={<GridViewIcon />}
            onClick={() => setViewMode("cards")}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "13px",
              padding: "6px 22px",
              minWidth: "150px",
              borderColor: "#E53935",
              color: viewMode === "cards" ? "#fff" : "#E53935",
              backgroundColor: viewMode === "cards" ? "#E53935" : "transparent",
            }}
          >
            View as Cards
          </Button>

          {/* View as List */}
          <Button
            variant={viewMode === "list" ? "contained" : "outlined"}
            startIcon={<ViewListIcon />}
            onClick={() => setViewMode("list")}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "13px",
              padding: "6px 22px",
              minWidth: "150px",
              borderColor: "#E53935",
              color: viewMode === "list" ? "#fff" : "#333",
              backgroundColor: viewMode === "list" ? "#E53935" : "transparent",
            }}
          >
            View as List
          </Button>

          {/* Divider */}
          <Box sx={{ width: "1px", height: "30px", background: "#ccc" }} />

          {/* Sort by Name */}
          <Button
            variant={sortBy === "name" ? "contained" : "outlined"}
            onClick={() => setSortBy(sortBy === "name" ? null : "name")}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "13px",
              padding: "6px 22px",
              minWidth: "150px",
              borderColor: "#E53935",
              color: sortBy === "name" ? "#fff" : "#333",
              backgroundColor: sortBy === "name" ? "#E53935" : "transparent",
            }}
          >
            Sort by Name
          </Button>

          {/* Sort by Price */}
          <Button
            variant={sortBy === "price" ? "contained" : "outlined"}
            onClick={() => setSortBy(sortBy === "price" ? null : "price")}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "13px",
              padding: "6px 22px",
              minWidth: "150px",
              borderColor: "#E53935",
              color: sortBy === "price" ? "#fff" : "#333",
              backgroundColor: sortBy === "price" ? "#E53935" : "transparent",
            }}
          >
            Sort by Price
          </Button>

          {/* Divider */}
          <Box sx={{ width: "1px", height: "30px", background: "#ccc" }} />

          {/* Download Menu */}
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "13px",
              padding: "6px 22px",
              minWidth: "150px",
              borderColor: "#E53935",
              color: "#333",
            }}
          >
            Download Menu
          </Button>
        </Box>
      
        {/* ===== CARDS VIEW ===== */}
        {viewMode === 'cards' ? (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr', md: 'repeat(2, auto)' },
              justifyContent: 'center',
              columnGap: '50px',
              rowGap: '25px',
            }}
          >
            {sortedItems.map((item) => (
              <Box
                key={item.id}
                onClick={() => openPopup(item)}
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '210px',
                  width: '350px',
                  backgroundColor: '#FFF8F8',
                  cursor: 'pointer',
                  transition: '0.25s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  },
                  '&:active': {
                    transform: 'scale(0.97)',
                  }
                }}
              >

                {/* IMAGE */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: '50%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* TEXT */}
                <Box
                  sx={{
                    width: '55%',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >

                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '15px',
                      color: '#777',
                      lineHeight: 1.4,
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mt: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '15px',
                        fontWeight: '700',
                        color: '#E53935',
                      }}
                    >
                      {item.price} $
                    </Typography>

                    <IconButton
                      sx={{
                        border: '1px solid #E53935',
                        color: '#E53935',
                        width: '28px',
                        height: '28px',
                        '&:hover': {
                          backgroundColor: '#E53935',
                          color: '#fff',
                        },
                      }}
                    >
                      <ShoppingCartOutlinedIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                  </Box>

                </Box>
              </Box>
            ))}
          </Box>
        ) : (

          /* ===== LIST VIEW ===== */
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {sortedItems.map((item) => (
              <Box
               onClick={() => openPopup(item)}
                key={item.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  border: '1px solid #eee',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: '600',
                      color: '#333',
                      fontSize: '16px',
                      mb: 0.5,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#999',
                      fontSize: '12px',
                      lineHeight: 1.4,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: '#E53935',
                    fontWeight: '700',
                    fontSize: '18px',
                    minWidth: '60px',
                    textAlign: 'right',
                  }}
                >
                  {item.price} $
                </Typography>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: '#E53935',
                    color: '#fff',
                    padding: '8px',
                    '&:hover': {
                      backgroundColor: '#C62828',
                    },
                  }}
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: '18px' }} />
                </IconButton>
              </Box>
            ))}
          </Box>
        )}
      </Box>

           {/* === POPUP HERE === */}
      <MenuItemPopup open={popupOpen} onClose={closePopup} item={selectedItem} />
    </>
  );
}


