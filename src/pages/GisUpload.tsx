import React from "react";
import {
  Home,
  Layers,
  Map,
  FileText,
  UploadCloud,
  Image,
  Settings,
  HelpCircle,
  User,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const GISUpload = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Upload Data GIS
        </h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50">
            Batal
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
            Simpan Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Form Kiri */}
        <div className="col-span-2 space-y-8">
          <section className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold text-gray-800 mb-4">
              Informasi Dataset
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Judul Dataset"
                className="input"
              />
              <input
                type="text"
                placeholder="Sumber Data (instansi / proyek)"
                className="input"
              />
              <input
                type="text"
                placeholder="Tanggal Pembuatan"
                className="input"
              />
              <select className="input">
                <option>Kategori Dataset</option>
                <option>Tata Ruang</option>
                <option>Lingkungan</option>
                <option>Infrastruktur</option>
                <option>Batas Wilayah</option>
              </select>
              <input
                type="text"
                placeholder="Koordinat Referensi (EPSG)"
                className="input"
              />
              <input
                type="text"
                placeholder="Skala Peta (mis. 1:5000)"
                className="input"
              />
            </div>
            <textarea
              placeholder="Deskripsi atau keterangan tambahan..."
              className="input mt-4 h-28 resize-none"
            />
          </section>

          <section className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold text-gray-800 mb-4">
              Metadata & Atribut
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Penanggung Jawab"
                className="input"
              />
              <input type="text" placeholder="Email Kontak" className="input" />
              <input type="text" placeholder="Tahun Data" className="input" />
              <select className="input">
                <option>Tipe Geometri</option>
                <option>Polygon</option>
                <option>Line</option>
                <option>Point</option>
              </select>
              <select className="input">
                <option>Status Publikasi</option>
                <option>Publik</option>
                <option>Internal</option>
                <option>Rahasia</option>
              </select>
              <input
                type="text"
                placeholder="Tag / Kata Kunci (pisahkan dengan koma)"
                className="input"
              />
            </div>
          </section>
        </div>

        {/* Panel Kanan */}
        <aside className="space-y-6">
          {/* Upload file GIS */}
          <section className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold text-gray-800 mb-3">File GIS</h3>
            <p className="text-xs text-gray-500 mb-4">
              Format yang diterima: <b>.shp, .geojson, .kml, .zip</b>
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-sm text-gray-500 hover:bg-gray-50 cursor-pointer">
              <UploadCloud className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              Klik untuk mengunggah file GIS
              <br />
              <span className="text-xs text-gray-400">
                atau seret file ke sini
              </span>
            </div>

            <div className="mt-4 border rounded-lg p-3 flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">
                  peta_batas_desa.zip
                </p>
                <p className="text-xs text-gray-500">2.4 MB</p>
                <div className="w-full bg-gray-200 h-1 mt-1 rounded-full">
                  <div className="bg-green-600 h-1 w-3/4 rounded-full"></div>
                </div>
              </div>
              <span className="text-xs text-green-600 font-medium">75%</span>
            </div>
          </section>

          {/* Upload Thumbnail */}
          <section className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Thumbnail Peta</h3>
            <p className="text-xs text-gray-500 mb-4">max. 2MB (PNG, JPG)</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 text-sm cursor-pointer hover:bg-gray-50">
              <Image className="w-6 h-6 mb-2 text-gray-400" />
              <span>Unggah Gambar</span>
            </div>
          </section>
        </aside>
      </div>
    </DashboardLayout>
  );
};

// Helper input class (gunakan di index.css)
const inputClass = `
  border rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50
  focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white w-full
`;

export default GISUpload;
