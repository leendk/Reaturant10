import { Route } from "react-router-dom";


// Layout
import FlatBurgerLayout from "./Layout/FlatBurgerLayout";

// Cart Pages
import CartPage from "./Pages/CartPages/CartPage/CartPage";
import CheckoutPage from "./Pages/CartPages/CheckoutPage/CheckoutPage";
import PlaceOrderPage from "./Pages/CartPages/PlaceOrderPage/PlaceOrderPage";
import ConfirmOrderPage from "./Pages/CartPages/ConfirmOrderPage/ConfirmOrderPage";
import FlatBurgerHome from "./Pages/FlatBurgerHome/FlatBurgerHome";
import ReservePage from "./Pages/ReservePage/ReservePage";
export function FlatBurgerRoutes() {
  return (
    <Route path="/FlatBurger" element={<FlatBurgerLayout />}>
  
  {/* صفحة الهوم */}
  <Route index element={<FlatBurgerHome />} />

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
