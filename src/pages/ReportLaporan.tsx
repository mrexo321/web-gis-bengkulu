import React, { useState } from "react";
import { FileText, BarChart3, Calendar, Eye, Filter } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

// Dummy data
const datasetDummy = [
  {
    id: 1,
    nama: "Batas Wilayah",
    kategori: "Administrasi",
    kondisi: "Baik",
    tahunDibuat: 2022,
    tahunDiperbaiki: 2025,
    gambar: "https://via.placeholder.com/400x250",
    deskripsi:
      "Dataset batas wilayah administratif digunakan sebagai dasar peta GIS regional.",
  },
  {
    id: 2,
    nama: "Sebaran UMKM",
    kategori: "Ekonomi",
    kondisi: "Perlu Pembaruan",
    tahunDibuat: 2023,
    tahunDiperbaiki: 2024,
    gambar: "https://via.placeholder.com/400x250",
    deskripsi:
      "Sebaran titik lokasi UMKM yang digunakan untuk analisis ekonomi daerah.",
  },
  {
    id: 3,
    nama: "Jaringan Jalan",
    kategori: "Transportasi",
    kondisi: "Baik",
    tahunDibuat: 2021,
    tahunDiperbaiki: 2023,
    gambar: "https://via.placeholder.com/400x250",
    deskripsi:
      "Dataset jaringan jalan utama dan jalan lokal untuk analisis aksesibilitas.",
  },
];

const ReportLaporan = () => {
  const [filterKategori, setFilterKategori] = useState("");
  const [filterTahunDibuat, setFilterTahunDibuat] = useState("");
  const [filterTahunDiperbaiki, setFilterTahunDiperbaiki] = useState("");
  const [search, setSearch] = useState("");
  const [detailItem, setDetailItem] = useState(null);

  const filteredData = datasetDummy.filter((item) => {
    return (
      (filterKategori === "" || item.kategori === filterKategori) &&
      (filterTahunDibuat === "" ||
        item.tahunDibuat === Number(filterTahunDibuat)) &&
      (filterTahunDiperbaiki === "" ||
        item.tahunDiperbaiki === Number(filterTahunDiperbaiki)) &&
      (search === "" || item.nama.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Laporan Data GIS
        </h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow flex items-center gap-2">
          <FileText className="w-4 h-4" /> Unduh Laporan PDF
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-5 h-5 text-green-700" />
            <h3 className="font-semibold">Total Dataset</h3>
          </div>
          <p className="text-3xl font-bold">124</p>
          <p className="text-xs text-gray-500 mt-1">+8 dataset bulan ini</p>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-green-700" />
            <h3 className="font-semibold">Update Terakhir</h3>
          </div>
          <p className="text-lg font-medium">11 Oktober 2025</p>
          <p className="text-xs text-gray-500 mt-1">
            Terbaru: Peta Sebaran UMKM
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-green-700" />
            <h3 className="font-semibold">Laporan Bulanan</h3>
          </div>
          <p className="text-lg font-medium">Oktober 2025</p>
          <p className="text-xs text-gray-500 mt-1">Status: Draft</p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white border rounded-xl p-5 shadow-sm mb-8">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filter Dataset
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Cari nama dataset..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border rounded-lg px-3 py-2"
            onChange={(e) => setFilterKategori(e.target.value)}
          >
            <option value="">Pilih Kategori</option>
            <option value="Administrasi">Administrasi</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Transportasi">Transportasi</option>
          </select>

          <select
            className="border rounded-lg px-3 py-2"
            onChange={(e) => setFilterTahunDibuat(e.target.value)}
          >
            <option value="">Tahun Dibuat</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>

          <select
            className="border rounded-lg px-3 py-2"
            onChange={(e) => setFilterTahunDiperbaiki(e.target.value)}
          >
            <option value="">Terakhir Diperbaiki</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase text-gray-600 bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Nama Dataset</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Kondisi</th>
              <th className="px-4 py-3">Tahun Dibuat</th>
              <th className="px-4 py-3">Terakhir Diperbaiki</th>
              <th className="px-4 py-3">Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{item.nama}</td>
                <td className="px-4 py-3">{item.kategori}</td>
                <td className="px-4 py-3">{item.kondisi}</td>
                <td className="px-4 py-3">{item.tahunDibuat}</td>
                <td className="px-4 py-3">{item.tahunDiperbaiki}</td>
                <td className="px-4 py-3">
                  <button
                    className="border rounded-lg px-2 py-1 hover:bg-gray-100"
                    onClick={() => setDetailItem(item)}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {detailItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full overflow-hidden">
            <img
              src={detailItem.gambar}
              alt="Preview"
              className="w-full h-56 object-cover"
            />

            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">{detailItem.nama}</h3>
              <p className="text-sm text-gray-600">{detailItem.deskripsi}</p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <p>
                  <span className="font-medium">Kategori:</span>{" "}
                  {detailItem.kategori}
                </p>
                <p>
                  <span className="font-medium">Kondisi:</span>{" "}
                  {detailItem.kondisi}
                </p>
                <p>
                  <span className="font-medium">Tahun Dibuat:</span>{" "}
                  {detailItem.tahunDibuat}
                </p>
                <p>
                  <span className="font-medium">Diperbaiki:</span>{" "}
                  {detailItem.tahunDiperbaiki}
                </p>
              </div>

              <button
                className="w-full mt-2"
                onClick={() => setDetailItem(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ReportLaporan;
