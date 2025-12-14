import { Route } from "react-router-dom";


// Layout
import TermbiLayout from "./Layout/TermbiLayout";

// Cart Pages
import CartPage from "./Pages/CartPages/CartPage/CartPage";
import CheckoutPage from "./Pages/CartPages/CheckoutPage/CheckoutPage";
import PlaceOrderPage from "./Pages/CartPages/PlaceOrderPage/PlaceOrderPage";
import ConfirmOrderPage from "./Pages/CartPages/ConfirmOrderPage/ConfirmOrderPage";
import TermbiHome from "./Pages/TermbiHome/TermbiHome";
// Reserve Page
 import ReservePage from "./Pages/ReservePage/ReservePage";

export function TermbiRoutes() {
  return (
    <Route path="/Termbi" element={<TermbiLayout />}>
  
  {/* صفحة الهوم */}
  <Route index element={<TermbiHome />} />

  {/* صفحات السلة */}
  <Route path="cart" element={<CartPage />} />
  <Route path="checkout" element={<CheckoutPage />} />
  <Route path="place-order" element={<PlaceOrderPage />} />
  <Route path="confirm-order" element={<ConfirmOrderPage />} />
  {/* صفحة الحجز */}
  <Route path="reserve" element={<ReservePage />} />

</Route>

  );
}
