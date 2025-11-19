import React from "react";
import { Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      {/* <div className="absolute top-6 left-6 flex items-center space-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Lambang_Kota_Bengkulu.png"
          alt="Logo Bengkulu"
          className="w-14 h-14 drop-shadow-lg"
        />
        <h1 className="text-white font-semibold text-lg hidden md:block">
          Pemerintah Kota Bengkulu
        </h1>
      </div> */}

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-blue-100">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Masuk ke Akun Anda
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="contoh@email.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span>Ingat saya</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Lupa Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition duration-200 shadow-md hover:shadow-lg"
          >
            Masuk
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Belum memiliki akun?</p>
          <a
            href="#"
            className="inline-block mt-2 border border-blue-500 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Daftar Akun Baru
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2025 Dinas Pertanahan dan Penataan Ruang Kota Bengkulu.
          <br />
          Pusat Informasi dan Layanan Tata Ruang Kota Bengkulu
        </p>
      </div>
    </div>
  );
}
