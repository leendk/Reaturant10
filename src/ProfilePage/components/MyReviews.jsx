import {
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  Pagination,
} from "@mui/material";
import { useState } from "react";

const reviewsData = [
  {
    id: 1,
    rating: 4,
    date: "25-01-2025",
    image: "assets/Restauratnt/Rectangle 7315.png",
    review:
      "A delicious and beautifully presented dish that just needs a little salt to be perfect.",
  },
  {
    id: 2,
    rating: 3,
    date: "24-01-2025",
    image: "assets/Restauratnt/Rectangle 7315 (1).png",
    review:
      "Delicious dish and good service but it has a lot of hot spices which makes it difficult to eat.",
  },
  {
    id: 3,
    rating: 1,
    date: "23-01-2025",
    image: "assets/Restauratnt/Rectangle 7544.png",
    review:
      "The taste is bad and the vegetables are not fresh. I don't want to eat this dish again.",
  },
];

export default function MyReviews() {
  const [page, setPage] = useState(1);

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
        My Reviews
      </Typography>

      {/* التباعد بين الكروت */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {reviewsData.map((review) => (
          <Card
            key={review.id}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "80px 1fr" },
              gap: 5,
              p: 2,
              alignItems: "center",
              backgroundColor: "#F9F9F9",
              border: "1px solid #eee",
              borderRadius: "12px",
              minHeight: "140px",
            }}
          >
            {/* الصورة */}
            <Box>
              <Box
                component="img"
                src={review.image}
                alt="review"
                sx={{
                  width: "120%",
                  height: "100px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* المحتوى */}
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  mb: 2,
                }}
              >
                <Rating
                  value={review.rating}
                  readOnly
                  size="small"
                  sx={{ color: "#FFB300" }}
                />

                <Typography sx={{ fontSize: "15px", color: "#999" }}>
                  {review.date}
                </Typography>
              </Box>

              <Typography
                sx={{ fontSize: "15px", color: "#666", lineHeight: 1.6 }}
              >
                {review.review}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Pagination بنفس التصميم */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={3}
          page={page}
          onChange={(event, value) => setPage(value)}
          siblingCount={0}
          boundaryCount={0}
          hidePrevButton
          hideNextButton
          sx={{
            "& .MuiPaginationItem-root": {
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              color: "#000",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#E2211C !important",
              borderColor: "#E2211C",
              color: "#fff !important",
              fontWeight: 600,
              boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        />
      </Box>
    </Box>
  );
}
