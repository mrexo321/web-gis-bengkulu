import React, { useState } from "react";
import {
  Home,
  Layers,
  Map,
  FileText,
  HelpCircle,
  Settings,
  Database,
  Plus,
  Trash2,
  Edit,
  Upload,
  User,
  Globe,
} from "lucide-react";

const Infrastructure = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center gap-2">
          <div className="w-6 h-6 bg-green-600 rounded"></div>
          <span className="font-semibold text-lg text-gray-800">
            GIS Bengkulu
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-2 text-sm">
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <Home className="w-4 h-4" /> Dashboard
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded-lg bg-green-50 text-green-700 font-medium">
            <Layers className="w-4 h-4" /> Pengelolaan Infrastruktur
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <Map className="w-4 h-4" /> Peta & Layer
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <FileText className="w-4 h-4" /> Laporan
          </button>
        </nav>

        <div className="border-t border-gray-200 p-4 space-y-2">
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <HelpCircle className="w-4 h-4" /> Bantuan
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <Settings className="w-4 h-4" /> Pengaturan
          </button>

          <div className="flex items-center gap-3 mt-4 p-2 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin GIS</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Pengelolaan Data Infrastruktur
            </h1>
            <p className="text-sm text-gray-500">
              Kelola data dan peta infrastruktur wilayah Kota Bengkulu.
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            <Plus size={18} /> Tambah Data
          </button>
        </div>

        {/* Form Tambah Data */}
        {showForm && (
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Form Tambah Data Infrastruktur
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Nama Infrastruktur
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Contoh: Jembatan Sungai Hitam"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Jenis Infrastruktur
                </label>
                <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none">
                  <option value="">Pilih Jenis</option>
                  <option value="jalan">Jalan</option>
                  <option value="jembatan">Jembatan</option>
                  <option value="drainase">Drainase</option>
                  <option value="fasilitas">Fasilitas Publik</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Kecamatan
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Contoh: Muara Bangkahulu"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <label className="text-sm font-medium text-gray-600">
                  Deskripsi
                </label>
                <textarea
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  rows={3}
                  placeholder="Tuliskan detail kondisi infrastruktur..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Koordinat (Latitude)
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="-3.812"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Koordinat (Longitude)
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="102.265"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <label className="text-sm font-medium text-gray-600">
                  Upload File GIS (GeoJSON / SHP)
                </label>
                <div className="mt-2 border border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition">
                  <Upload className="mx-auto text-green-500 mb-2" size={24} />
                  <p className="text-sm text-gray-600">
                    Drag & Drop file di sini atau{" "}
                    <span className="text-green-600 cursor-pointer">
                      klik untuk unggah
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4 md:col-span-2 lg:col-span-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tabel Data Infrastruktur */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Daftar Infrastruktur Terdata
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm text-gray-700">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Nama</th>
                  <th className="px-4 py-2 text-left">Jenis</th>
                  <th className="px-4 py-2 text-left">Kecamatan</th>
                  <th className="px-4 py-2 text-left">Koordinat</th>
                  <th className="px-4 py-2 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{i}</td>
                    <td className="px-4 py-2">Jalan Soekarno-Hatta</td>
                    <td className="px-4 py-2">Jalan</td>
                    <td className="px-4 py-2">Sungai Serut</td>
                    <td className="px-4 py-2">-3.810, 102.270</td>
                    <td className="px-4 py-2 text-center flex items-center justify-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Infrastructure;
