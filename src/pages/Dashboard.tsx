import React from "react";
import { Layers, Globe, User, Database } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix icon agar muncul (karena default Leaflet icon tidak muncul di React)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Dashboard = () => {
  // Contoh polygon layer
  const polygonCoords = [
    [
      [-3.793, 102.263],
      [-3.795, 102.267],
      [-3.797, 102.262],
    ],
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard GIS</h1>
        <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
          + Tambah Dataset
        </button>
      </div>

      {/* Statistik */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-green-100 text-green-700 rounded-xl">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Dataset</p>
            <h3 className="text-xl font-semibold">124</h3>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Kategori</p>
            <h3 className="text-xl font-semibold">8</h3>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-orange-100 text-orange-700 rounded-xl">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Ukuran Data</p>
            <h3 className="text-xl font-semibold">1.2 GB</h3>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-purple-100 text-purple-700 rounded-xl">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Pengguna Aktif</p>
            <h3 className="text-xl font-semibold">34</h3>
          </div>
        </div>
      </section>

      {/* Peta dan Aktivitas */}
      <section className="grid lg:grid-cols-3 gap-6">
        {/* Peta */}
        <div className="col-span-2 bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Tampilan Peta</h2>
            <button className="text-sm text-green-700 hover:underline">
              Lihat Selengkapnya
            </button>
          </div>

          <div className="rounded-lg overflow-hidden border h-[380px]">
            <MapContainer
              center={[-3.793, 102.263]}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <LayersControl position="topright">
                {/* Base Layers */}
                <LayersControl.BaseLayer checked name="OpenStreetMap">
                  <TileLayer
                    attribution="© OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="Satellite (Esri)">
                  <TileLayer
                    attribution="© Esri & contributors"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                </LayersControl.BaseLayer>

                {/* Overlay Layers */}
                <LayersControl.Overlay checked name="Titik Fasilitas">
                  <Marker position={[-3.793, 102.263]}>
                    <Popup>
                      <b>Kantor Walikota Bengkulu</b>
                      <br />
                      Koordinat: -3.793, 102.263
                    </Popup>
                  </Marker>
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Batas Wilayah Contoh">
                  <Polygon
                    pathOptions={{ color: "green", fillOpacity: 0.2 }}
                    positions={polygonCoords}
                  />
                </LayersControl.Overlay>
              </LayersControl>
            </MapContainer>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">
            Aktivitas Terbaru
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-1"></div>
              <p>
                Dataset <b>Batas Desa Kedung Waringin</b> berhasil diunggah.
                <span className="block text-xs text-gray-500 mt-1">
                  2 jam lalu
                </span>
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
              <p>
                Dataset <b>Peta Tata Guna Lahan</b> diperbarui.
                <span className="block text-xs text-gray-500 mt-1">
                  Kemarin
                </span>
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-1"></div>
              <p>
                Pengguna baru <b>Rifky</b> ditambahkan sebagai editor.
                <span className="block text-xs text-gray-500 mt-1">
                  2 hari lalu
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Tabel Data GIS */}
      <section className="mt-8 bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Data GIS Terbaru</h2>
          <button className="text-sm text-green-700 hover:underline">
            Lihat Semua
          </button>
        </div>

        <table className="w-full text-sm text-left border-t border-gray-100">
          <thead className="text-xs uppercase text-gray-500 bg-gray-50">
            <tr>
              <th className="px-4 py-3">Nama Dataset</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Tipe Geometri</th>
              <th className="px-4 py-3">Tanggal Upload</th>
              <th className="px-4 py-3">Ukuran</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-medium">Batas Administrasi Desa</td>
              <td className="px-4 py-3">Tata Ruang</td>
              <td className="px-4 py-3">Polygon</td>
              <td className="px-4 py-3">11 Okt 2025</td>
              <td className="px-4 py-3">2.4 MB</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Jaringan Jalan Utama</td>
              <td className="px-4 py-3">Infrastruktur</td>
              <td className="px-4 py-3">Line</td>
              <td className="px-4 py-3">09 Okt 2025</td>
              <td className="px-4 py-3">1.1 MB</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Sebaran UMKM</td>
              <td className="px-4 py-3">Ekonomi</td>
              <td className="px-4 py-3">Point</td>
              <td className="px-4 py-3">07 Okt 2025</td>
              <td className="px-4 py-3">530 KB</td>
            </tr>
          </tbody>
        </table>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
