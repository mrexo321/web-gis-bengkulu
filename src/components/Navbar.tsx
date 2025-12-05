import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img
            src="https://iconlogovector.com/uploads/images/2023/05/lg-9cee3ca8e0a838a8e72da83c54f6e5fc56.jpg"
            alt="Logo Kota Bengkulu"
            className="w-10 h-10"
          />
          <div>
            <h1 className="text-lg font-bold text-blue-900">
              Pemerintah Kota Bengkulu
            </h1>
            {/* <p className="text-xs text-blue-600">
              Portal Resmi Tata Ruang Kota Bengkulu
            </p> */}
          </div>
        </div>

        {/* NAV - DESKTOP */}
        <nav className="hidden md:flex items-center space-x-8 text-blue-900 font-medium">
          {/* <Link to="/services" className="hover:text-blue-600 transition">
            Layanan
          </Link> */}
          {/* <Link to="/news" className="hover:text-blue-600 transition">
            Berita
          </Link> */}
          {/* <Link to="/map" className="hover:text-blue-600 transition">
            Peta
          </Link> */}
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </nav>

        {/* TOGGLE BUTTON - MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-900 focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-blue-200 shadow-md animate-slideDown">
          <nav className="flex flex-col py-4 px-6 space-y-4 text-blue-900 font-medium">
            <Link
              to="/services"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Layanan
            </Link>
            <Link
              to="/news"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Berita
            </Link>
            <Link
              to="/map"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Peta
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
