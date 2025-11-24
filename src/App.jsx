import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import ContactUs from './ContactPage/ContactUs'
import SignUp from './SignUpPage/SignUp'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}
