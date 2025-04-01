import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Layout from "./layouts/Layout"
import WorkShop from "./pages/Workshop"
import DashBoard from "./pages/DashBoard"
import Item from "./pages/Item"

import PrivateRoute from "./routes/private.route"
import PublicRoute from "./routes/public.route"
import Account from "./pages/Account"

export default function App() {
  return(
    <Router>
      <Toaster />
      <Routes>
        <Route 
          index 
          element={
          <PublicRoute>
            <Home />
            </PublicRoute>
        } />
        <Route 
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
        } />
        <Route 
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Layout />}>
          <Route 
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
                </PrivateRoute>
          } />
          <Route 
            path="/workshops/:id" 
            element={
              <PrivateRoute>
                <WorkShop />
                </PrivateRoute>
          }/>
          <Route 
            path="/items/:id" 
            element={
              <PrivateRoute>
                <Item />
              </PrivateRoute>
          } />
        </Route>
      </Routes>
    </Router>
  )
}