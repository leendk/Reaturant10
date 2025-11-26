import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import ContactUs from './ContactPage/ContactUs'
import RestaurantRegester from './SignUpPage/RestaurantRegester'
import Login from './LogInPage/loginPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/RestaurantRegester/*" element={<RestaurantRegester />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}
