import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* konten otomatis memanjang */}
      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default HomeLayout;
