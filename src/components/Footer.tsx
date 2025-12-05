import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Tentang Kami</h4>
          <p className="text-sm text-blue-200">
            Basis Data Infrastruktur Kota Bengkulu adalah portal resmi informasi
            In
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Kontak</h4>
          <p className="text-sm">Jl. S. Parman No. 10, Kota Bengkulu</p>
          <p className="text-sm">Email: info@bengkulutataruang.go.id</p>
          <p className="text-sm">Telepon: (0736) 123456</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Ikuti Kami</h4>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-blue-300">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-300">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-300">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-300 text-sm mt-8 border-t border-blue-800 pt-4">
        © 2025 Pemerintah Kota Bengkulu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
