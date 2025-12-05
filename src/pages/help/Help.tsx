import React from "react";
import {
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
  ChevronRight,
  LifeBuoy,
} from "lucide-react";
import DashboardLayout from "../../layouts/DashboardLayout";

const Help = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        {/* HERO */}
        <div className="bg-green-600 rounded-2xl p-8 text-white shadow-md">
          <h1 className="text-3xl font-bold mb-3">Pusat Bantuan</h1>
          <p className="opacity-90 text-lg max-w-2xl">
            Temukan panduan, FAQ, dan pusat dukungan untuk membantu Anda
            mengelola data dan sistem dengan lebih mudah.
          </p>
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <LifeBuoy className="text-green-600" size={26} />
              <h2 className="font-semibold text-lg">Panduan Penggunaan</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Pelajari langkah-langkah lengkap untuk menggunakan sistem.
            </p>
            <button className="text-green-600 text-sm font-medium flex items-center">
              Buka Panduan <ChevronRight size={16} />
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <MessageSquare className="text-green-600" size={26} />
              <h2 className="font-semibold text-lg">FAQ</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Kumpulan pertanyaan yang sering diajukan beserta jawabannya.
            </p>
            <button className="text-green-600 text-sm font-medium flex items-center">
              Lihat FAQ <ChevronRight size={16} />
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <BookOpen className="text-green-600" size={26} />
              <h2 className="font-semibold text-lg">Dokumentasi</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Membahas struktur data, fitur, dan referensi API internal.
            </p>
            <button className="text-green-600 text-sm font-medium flex items-center">
              Lihat Dokumentasi <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Pertanyaan Umum</h2>

          <div className="bg-white border rounded-xl divide-y shadow">
            <details className="p-5">
              <summary className="cursor-pointer font-medium text-gray-800 flex justify-between items-center">
                Bagaimana cara menambahkan Layer baru?
              </summary>
              <p className="mt-2 text-gray-600 text-sm">
                Masuk ke menu "Layer", klik tombol Tambah Layer, lalu isi data
                yang diperlukan. Anda juga dapat mengimport file GeoJSON.
              </p>
            </details>

            <details className="p-5">
              <summary className="cursor-pointer font-medium text-gray-800 flex justify-between items-center">
                Mengapa Layer saya tidak muncul di peta?
              </summary>
              <p className="mt-2 text-gray-600 text-sm">
                Pastikan format GeoJSON valid, koordinat benar (lat/lng), dan
                layer sudah diaktifkan dari panel daftar layer.
              </p>
            </details>

            <details className="p-5">
              <summary className="cursor-pointer font-medium text-gray-800 flex justify-between items-center">
                Bagaimana cara menghubungi admin sistem?
              </summary>
              <p className="mt-2 text-gray-600 text-sm">
                Anda dapat menghubungi admin melalui email atau telepon yang
                tersedia di bagian Kontak Bantuan.
              </p>
            </details>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="mt-12 bg-green-50 border border-green-200 p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-green-900 mb-3">
            Butuh Bantuan Lebih Lanjut?
          </h2>
          <p className="text-gray-700 mb-6">
            Tim kami siap membantu Anda jika mengalami kendala dalam penggunaan
            aplikasi.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-green-700" size={28} />
              <div>
                <p className="font-medium text-gray-800">Telepon</p>
                <p className="text-gray-600 text-sm">+62 812 0000 1234</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-green-700" size={28} />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">
                  support.tataruang@bengkulu.go.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Help;
