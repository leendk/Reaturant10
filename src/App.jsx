import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import LandingPage from "./LandingPage/LandingPage";
import ContactUs from "./ContactPage/ContactUs";
import RestaurantRegester from "./SignUpPage/RestaurantRegester";
import Login from "./LogInPage/loginPage";
import {TermbiRoutes} from "./TermbiRestaurantPage/TermbiPage";
import ProfilePage from './ProfilePage/ProfilePage'
import { FlatBurgerRoutes } from "./FlatBurgerReataurantPage/FlatBurgerPage";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {FlatBurgerRoutes()}
          {TermbiRoutes()}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/RestaurantRegester/*" element={<RestaurantRegester />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}
