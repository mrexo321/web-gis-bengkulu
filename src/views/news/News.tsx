import React from "react";
import HomeLayout from "../../layouts/HomeLayout";

const News = () => {
  return (
    <HomeLayout>
      <div className="w-full bg-blue-50 py-10">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-5 mb-10">
          <h1 className="text-3xl font-bold text-blue-900">
            Berita & Informasi
          </h1>
          <p className="text-blue-700 mt-2">
            Update terbaru mengenai kegiatan, pengumuman, dan informasi resmi
            dari Instansi Kota.
          </p>
        </div>

        {/* Grid Berita */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-5">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-blue-200">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Berita 1"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-700 transition">
                Pemerintah Kota Menggelar Kerja Bakti Bersama Masyarakat
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Kegiatan ini dilaksanakan untuk menjaga kebersihan lingkungan
                dan meningkatkan kesadaran masyarakat.
              </p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Baca Selengkapnya →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-blue-200">
            <img
              src="https://images.unsplash.com/photo-1573497019236-17f8177b81df"
              alt="Berita 2"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-700 transition">
                Wali Kota Meresmikan Gedung Pelayanan Publik Terpadu
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Gedung ini diharapkan dapat mempermudah masyarakat dalam
                mengurus berbagai layanan administratif.
              </p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Baca Selengkapnya →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-blue-200">
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f"
              alt="Berita 3"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-700 transition">
                Pengumuman: Pembukaan Pendaftaran Beasiswa Daerah 2025
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Pemerintah Kota membuka kesempatan bagi pelajar berprestasi
                untuk mendapatkan beasiswa pendidikan.
              </p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        </div>

        {/* Section Pengumuman Singkat */}
        <div className="max-w-5xl mx-auto px-5 mt-14">
          <h2 className="text-2xl font-bold text-blue-900">Pengumuman Resmi</h2>
          <ul className="mt-4 space-y-3">
            <li className="bg-white border border-blue-200 shadow-sm p-4 rounded-lg">
              <p className="text-blue-800 font-medium">
                • Jadwal Pemeliharaan Sistem Layanan Online pada 30 November
                2025.
              </p>
            </li>
            <li className="bg-white border border-blue-200 shadow-sm p-4 rounded-lg">
              <p className="text-blue-800 font-medium">
                • Penutupan Sementara Lapangan Merdeka untuk Renovasi.
              </p>
            </li>
            <li className="bg-white border border-blue-200 shadow-sm p-4 rounded-lg">
              <p className="text-blue-800 font-medium">
                • Pembayaran Pajak Daerah Diperpanjang hingga 15 Desember 2025.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
};

export default News;
