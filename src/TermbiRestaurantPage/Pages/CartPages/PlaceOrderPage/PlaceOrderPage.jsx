import { Box, Typography, Button } from "@mui/material";
import CartProgress from "../components/CartProgress.jsx";
import { useLocation , useNavigate } from "react-router-dom";


export default function PlaceOrderPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onConfirm = () => {
  navigate("/confirm-order");
};


  console.log(state);
  const orderData = {
  code: "551100223364854 - 55999811",

  totalPrice: (state?.grandTotal || 540) + "$",

  name: state?.cardholderName || "Customer name",

  phone: state?.cardNumber || "+44 528 584 5364",

  deliveryAddress:
    state?.deliveryAddress ||
    "Lorem Ipsum has been the industry's standard dummy",
};


  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
     

      {/* ==== Breadcrumb ==== */}
      <Box sx={{ mt: 4 }}>
        <CartProgress currentStep={2} />
      </Box>

      {/* ==== WHITE BOX ==== */}
      <Box
        sx={{
          width: "646px",       // نفس عرض الصورة بالضبط
          mx: "auto",
         mt: -2,   
          mb: 8,
          background: "#fff",
          borderRadius: "4px",
          p: 4,
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 600,
            color: "#5D5D5D",
            textAlign: "center",
            mb: 4,
          }}
        >
          Your Order is Ready
        </Typography>

        {/* Order Summary */}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#EC2323",
            mb: 2,
          }}
        >
          Order Summary
        </Typography>

        {/* === ROW COMPONENT === */}
        {[
            { label: "Order Code", value: orderData.code },
            { label: "Total Price", value: orderData.totalPrice },
            { label: "Name", value: orderData.name },
            { label: "Phone", value: orderData.phone },
            { label: "Delivery address", value: orderData.deliveryAddress, isAddress: true },
            ].map((item, i) => (
            <Box
                key={i}
                sx={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                alignItems: "start",   // مهم ليجعل النص متعدد الأسطر مضبوطاً
                py: 1.3,
                borderBottom: "1px solid #e5e5e5", // خط دائماً تحت كل صف
                }}
            >
                {/* LABEL */}
                <Typography sx={{ fontSize: "15px", color: "#272727" }}>
                {item.label}
                </Typography>

                {/* VALUE */}
                <Typography
                sx={{
                    fontSize: "15px",
                    color: i === 1 ? "#EC2323" : "#272727",
                    fontWeight: 500,
                    whiteSpace: item.isAddress ? "normal" : "nowrap", // يسمح بالأسطر المتعددة
                    lineHeight: 1.4,
                }}
                >
                {item.value}
                </Typography>
            </Box>
            ))}


        {/* Confirm Button */}
        {/* Confirm Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            onClick={() => navigate("/FlatBurger/confirm-order")}
            sx={{
              backgroundColor: "#EC2323",
              color: "#fff",
              px: 10,
              py: 1.2,
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "14px",
              "&:hover": { backgroundColor: "#C91F1F" },
            }}
          >
            Confirm
          </Button>
        </Box>

      </Box>
    </Box>
  );
}
