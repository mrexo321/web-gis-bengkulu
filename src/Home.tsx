import React from "react";
import { MapPin, FileText, Users } from "lucide-react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white text-gray-800 text-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Lambang_Kota_Bengkulu.png"
              alt="Logo Kota Bengkulu"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-lg font-bold">
                Bengkulu Urban Planning Center
              </h1>
              <p className="text-sm text-blue-200">
                Portal Resmi Tata Ruang Kota Bengkulu
              </p>
            </div>
          </div>
          <nav className="space-x-6 hidden md:block">
            <Link to="#layanan" className="hover:text-blue-300">
              Layanan
            </Link>
            <Link to="#berita" className="hover:text-blue-300">
              Berita
            </Link>
            <Link to="/map" className="hover:text-blue-300">
              Peta
            </Link>
            <Link to="/login" className="hover:text-blue-300">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#2451AB] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selamat Datang di Portal Tata Ruang Kota Bengkulu
          </h2>
          <p className="text-blue-200 mb-8">
            Akses informasi dan layanan perencanaan tata ruang secara digital
            dengan mudah.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Akses Layanan
          </button>
        </div>
      </section>

      {/* Profil Walikota */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Sambutan Walikota Bengkulu
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Selamat datang di situs resmi Bengkulu Urban Planning Center. Kami
            berkomitmen menghadirkan layanan tata ruang yang transparan,
            efisien, dan berpihak pada pembangunan berkelanjutan.
          </p>
          <p className="font-semibold text-blue-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            dolorem!
          </p>
          <p className="text-sm text-gray-500">Walikota Bengkulu</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video Sambutan Walikota"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">
            Layanan Tata Ruang Kota Bengkulu
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FileText className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Layanan Utama</h4>
              <p className="text-sm text-gray-600">
                Akses dokumen dan pelayanan utama terkait tata ruang Kota
                Bengkulu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Peta Kota Bengkulu</h4>
              <p className="text-sm text-gray-600">
                Jelajahi peta interaktif dan rencana tata ruang kota secara
                detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Interaksi Tata Ruang</h4>
              <p className="text-sm text-gray-600">
                Ikuti forum dan diskusi publik mengenai kebijakan tata ruang
                Bengkulu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Berita & Artikel */}
      <section id="berita" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Berita & Artikel
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
              >
                <img
                  loading="lazy"
                  src={`https://images.pexels.com/photos/${
                    15000 + i
                  }/pexels-photo-${
                    15000 + i
                  }.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`}
                  alt="Berita Bengkulu"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Sosialisasi Peraturan Tata Ruang Bengkulu {i}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Pemerintah Kota Bengkulu mengadakan sosialisasi terkait RTRW
                    dan pembangunan berkelanjutan.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Hukum */}
      <section id="produk" className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">
            Produk Hukum
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <img
                  loading="lazy"
                  src={`https://images.pexels.com/photos/${
                    20000 + i
                  }/pexels-photo-${
                    20000 + i
                  }.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop`}
                  alt="Produk Hukum"
                  className="w-full h-24 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold mb-2">
                  Peraturan No {i} Tahun 2024
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Tentang Penataan Ruang Wilayah Kota Bengkulu.
                </p>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Lihat Dokumen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Foto */}
      <section id="galeri" className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Galeri Foto</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <img
                key={i}
                loading="lazy"
                src={`https://images.pexels.com/photos/${
                  30000 + i
                }/pexels-photo-${
                  30000 + i
                }.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`}
                alt={`Galeri Kota Bengkulu ${i}`}
                className="rounded-lg shadow hover:opacity-90 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Tentang Kami</h4>
            <p className="text-sm text-blue-200">
              Bengkulu Urban Planning Center adalah portal resmi informasi dan
              layanan tata ruang Kota Bengkulu.
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
    </div>
  );
}
