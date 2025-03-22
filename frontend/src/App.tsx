import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Layout from "./layouts/Layout"
import WorkShop from "./pages/Workshop"
import DashBoard from "./pages/DashBoard"

export default function App() {
  return(
    <Router>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/workshops/:id" element={<WorkShop />}/>
        </Route>
      </Routes>
    </Router>
  )
}