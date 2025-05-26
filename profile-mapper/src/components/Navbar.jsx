// src/components/Navbar.jsx
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">ProfileMapApp</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
      </div>
    </nav>
  )
}

export default Navbar
