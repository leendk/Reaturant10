import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import ContactUs from './ContactPage/ContactUs'
import RestaurantRegester from './SignUpPage/RestaurantRegester'
import Login from './LogInPage/loginPage'
import Termbi from './TermbiRestaurantPage/TermbiPage'
import FlatBurgerPage from './FlatBurgerReataurantPage/FlatBurgerPage'
                    

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Termbi" element={<Termbi />} />
        <Route path="/FlatBurger" element={<FlatBurgerPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/RestaurantRegester/*" element={<RestaurantRegester />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  )
}
