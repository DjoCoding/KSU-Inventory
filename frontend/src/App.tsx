import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import DashBoard from "./pages/DashBoard"

export default function App() {
  return(
    <Router>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  )
}