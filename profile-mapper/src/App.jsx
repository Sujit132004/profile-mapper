// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

import Navbar from "./components/Navbar"
import AdminDashboard from "./pages/AdminDashboard"
import { useState } from "react"

const App = () => {
  const [profiles, setProfiles] = useState([]); 
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home profiles={profiles}  />} />
        <Route path="/admin" element={<AdminDashboard profiles={profiles} setProfiles={setProfiles} />} />
      </Routes>
    </div>
  )
}

export default App
