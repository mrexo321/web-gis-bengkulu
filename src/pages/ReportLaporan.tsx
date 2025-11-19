import React from "react";
import { FileText, BarChart3, Calendar } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const ReportLaporan = () => {
  return (
    <DashboardLayout>
      {/* Main */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Laporan Data GIS
        </h1>
        <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
          Unduh Laporan PDF
        </button>
      </div>

      {/* Ringkasan */}
      <section className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-5 h-5 text-green-700" />
            <h3 className="font-semibold">Total Dataset</h3>
          </div>
          <p className="text-3xl font-bold">124</p>
          <p className="text-xs text-gray-500 mt-1">+8 dataset bulan ini</p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-green-700" />
            <h3 className="font-semibold">Update Terakhir</h3>
          </div>
          <p className="text-lg font-medium">11 Oktober 2025</p>
          <p className="text-xs text-gray-500 mt-1">
            Terbaru: Peta Sebaran UMKM
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-green-700" />
            <h3 className="font-semibold">Laporan Bulanan</h3>
          </div>
          <p className="text-lg font-medium">Oktober 2025</p>
          <p className="text-xs text-gray-500 mt-1">Status: Draft</p>
        </div>
      </section>

      {/* Tabel */}
      <section className="bg-white border rounded-xl p-6">
        <h2 className="font-semibold text-gray-800 mb-4">Rekap Data GIS</h2>
        <table className="w-full text-sm text-left border-t border-gray-100">
          <thead className="text-xs uppercase text-gray-500 bg-gray-50">
            <tr>
              <th className="px-4 py-3">Nama Dataset</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Tipe</th>
              <th className="px-4 py-3">Tanggal Upload</th>
              <th className="px-4 py-3">Ukuran</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-medium">Batas Wilayah</td>
              <td className="px-4 py-3">Administrasi</td>
              <td className="px-4 py-3">Polygon</td>
              <td className="px-4 py-3">11 Okt 2025</td>
              <td className="px-4 py-3">2.4 MB</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Sebaran UMKM</td>
              <td className="px-4 py-3">Ekonomi</td>
              <td className="px-4 py-3">Point</td>
              <td className="px-4 py-3">10 Okt 2025</td>
              <td className="px-4 py-3">530 KB</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Jaringan Jalan</td>
              <td className="px-4 py-3">Transportasi</td>
              <td className="px-4 py-3">Line</td>
              <td className="px-4 py-3">08 Okt 2025</td>
              <td className="px-4 py-3">1.1 MB</td>
            </tr>
          </tbody>
        </table>
      </section>
    </DashboardLayout>
  );
};

export default ReportLaporan;
