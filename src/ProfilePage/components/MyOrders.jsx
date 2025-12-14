import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  
} from "@mui/material";

const orderData = [
  {
    id: "11236087",
    image: "assets/Restauratnt/Rectangle 7315.png",
    date: "20-01-2025",
    amount: "50$",
  },
  {
    id: "11235910",
    image: "/assets/Restauratnt/Rectangle 7315 (1).png",
    date: "10-01-2025",
    amount: "90$",
  },
  {
    id: "11235807",
    image: "assets/Restauratnt/Rectangle 7544.png",
    date: "29-12-2024",
    amount: "50$",
  },
  {
    id: "11235694",
    image: "assets/Restauratnt/Rectangle 7545.png",
    date: "16-12-2024",
    amount: "50$",
  },
  {
    id: "11235611",
    image: "assets/Restauratnt/Rectangle 7546.png",
    date: "23-12-2024",
    amount: "150$",
  },
];

export default function MyOrders() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3]; // يمكنك تغييره حسب عدد الصفحات

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        p: 4,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ fontSize: "20px", fontWeight: 600, color: "#333", mb: 3 }}
      >
        My Order
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 600, color: "#666", fontSize: "12px" }}
              >
                Order id
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#666", fontSize: "12px" }}
              >
                Products
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#666", fontSize: "12px" }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#666", fontSize: "12px" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#666", fontSize: "12px" }}
              >
                Details
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#666", fontSize: "12px" }}
              >
                Review
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orderData.map((order) => (
              <TableRow key={order.id} sx={{ "& td": { borderBottom: "none" }, }} >
                <TableCell>{order.id}</TableCell>

                <TableCell>
                  <Box
                    component="img"
                    src={order.image}
                    alt="order"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </TableCell>

                <TableCell sx={{ fontSize: "12px", color: "#666" }}>
                  {order.date}
                </TableCell>
                <TableCell sx={{ fontSize: "12px", color: "#666" }}>
                  {order.amount}
                </TableCell>

                <TableCell>
                  <Button
                    sx={{
                      fontSize: "11px",
                      color: "#E53935",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    View details
                  </Button>
                </TableCell>

                <TableCell>
                  <Button
                    sx={{
                      fontSize: "11px",
                      color: "#E53935",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Review order
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ⭐ Pagination أسفل وأسفل وأسفل — بدون dividers — تفاعلي بالكامل */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {pages.map((page) => (
            <Box
              key={page}
              onClick={() => setCurrentPage(page)}
              sx={{
                width: 32,
                height: 32,
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontWeight: "600",
                transition: "0.2s",
                backgroundColor: currentPage === page ? "#E02020" : "#fff",
                color: currentPage === page ? "#fff" : "#000",
                border: currentPage === page ? "none" : "1px solid #D3D3D3",
              }}
            >
              {page}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
