import React from "react";
import {
  Home,
  Layers,
  Map,
  FileText,
  HelpCircle,
  Settings,
  Upload,
  FilePlus,
  Edit3,
  Trash2,
  BookOpen,
} from "lucide-react";

const PublicationRules = () => {
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
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <Layers className="w-4 h-4" /> Data Infrastruktur
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <Map className="w-4 h-4" /> Peta & Layer
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded-lg bg-green-50 text-green-700 font-medium">
            <FileText className="w-4 h-4" /> Publikasi & Peraturan
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

      {/* Main */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Pengelolaan Data Publikasi & Peraturan
          </h1>
          <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center gap-2">
            <FilePlus className="w-4 h-4" />
            Tambah Dokumen
          </button>
        </div>

        {/* Statistik */}
        <section className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white border rounded-xl p-5 flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-700 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Publikasi</p>
              <h3 className="text-xl font-semibold">56</h3>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5 flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Peraturan Aktif</p>
              <h3 className="text-xl font-semibold">18</h3>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5 flex items-center gap-4">
            <div className="p-3 bg-orange-100 text-orange-700 rounded-xl">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Terakhir Diperbarui</p>
              <h3 className="text-xl font-semibold">12 Okt 2025</h3>
            </div>
          </div>
        </section>

        {/* Tabel Data Publikasi */}
        <section className="bg-white border rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">
              Daftar Dokumen Publikasi & Peraturan
            </h2>
            <input
              type="text"
              placeholder="Cari dokumen..."
              className="border rounded-lg px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <table className="w-full text-sm text-left border-t border-gray-100">
            <thead className="text-xs uppercase text-gray-500 bg-gray-50">
              <tr>
                <th className="px-4 py-3">Judul Dokumen</th>
                <th className="px-4 py-3">Kategori</th>
                <th className="px-4 py-3">Tanggal Terbit</th>
                <th className="px-4 py-3">Diterbitkan Oleh</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-medium">
                  Peraturan Zonasi Wilayah Pesisir Bengkulu
                </td>
                <td className="px-4 py-3">Peraturan Daerah</td>
                <td className="px-4 py-3">10 Okt 2025</td>
                <td className="px-4 py-3">Dinas Tata Ruang</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3 font-medium">
                  Panduan Pembangunan Berkelanjutan Kota Bengkulu
                </td>
                <td className="px-4 py-3">Publikasi</td>
                <td className="px-4 py-3">5 Okt 2025</td>
                <td className="px-4 py-3">Bappeda Kota</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3 font-medium">
                  Laporan Tahunan Penataan Ruang 2025
                </td>
                <td className="px-4 py-3">Laporan</td>
                <td className="px-4 py-3">2 Okt 2025</td>
                <td className="px-4 py-3">Dinas PU & PR</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default PublicationRules;
