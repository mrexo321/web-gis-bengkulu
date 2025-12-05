import React from "react";
import {
  Layers,
  Globe,
  User,
  Database,
  Map,
  ArrowRight,
  Activity,
} from "lucide-react";
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

// Fix Leaflet Icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Dashboard = () => {
  const polygonCoords = [
    [
      [-3.793, 102.263],
      [-3.795, 102.267],
      [-3.797, 102.262],
    ],
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* ===================== */}
        {/* HEADER */}
        {/* ===================== */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Selamat Datang 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Pantau data GIS Anda dengan visualisasi yang lebih modern.
            </p>
          </div>

          <button className="px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition shadow-sm">
            + Tambah Dataset
          </button>
        </div>

        {/* ===================== */}
        {/* STATISTIK PREMIUM */}
        {/* ===================== */}
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Database,
              label: "Total Dataset",
              value: "124",
              color: "green",
            },
            { icon: Layers, label: "Kategori", value: "8", color: "blue" },
            {
              icon: Globe,
              label: "Ukuran Data",
              value: "1.2 GB",
              color: "orange",
            },
            {
              icon: User,
              label: "Pengguna Aktif",
              value: "34",
              color: "purple",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition flex items-center gap-4"
            >
              <div
                className={`p-3 rounded-xl bg-${item.color}-100 text-${item.color}-700`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500">{item.label}</p>
                <h3 className="text-xl font-bold">{item.value}</h3>
              </div>
            </div>
          ))}
        </section>

        {/* ===================== */}
        {/* PETA + AKTIVITAS TERBARU */}
        {/* ===================== */}
        <section className="grid lg:grid-cols-3 gap-6">
          {/* MAP SECTION */}
          <div className="col-span-2 bg-white border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                <Map className="w-5 h-5 text-green-600" /> Peta Utama
              </h2>
              <button className="text-sm text-green-700 flex items-center hover:underline">
                Lihat Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border h-[380px]">
              <MapContainer
                center={[-3.793, 102.263]}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <LayersControl position="topright">
                  <LayersControl.BaseLayer checked name="OpenStreetMap">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  </LayersControl.BaseLayer>

                  <LayersControl.BaseLayer name="Esri Satellite">
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                  </LayersControl.BaseLayer>

                  <LayersControl.Overlay checked name="Titik Fasilitas">
                    <Marker position={[-3.793, 102.263]}>
                      <Popup>
                        <b>Kantor Walikota</b>
                        <br />
                        Koordinat: -3.793, 102.263
                      </Popup>
                    </Marker>
                  </LayersControl.Overlay>

                  <LayersControl.Overlay name="Area Wilayah">
                    <Polygon
                      positions={polygonCoords}
                      pathOptions={{ color: "green", fillOpacity: 0.25 }}
                    />
                  </LayersControl.Overlay>
                </LayersControl>
              </MapContainer>
            </div>
          </div>

          {/* LATEST ACTIVITY */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-green-600" />
              Aktivitas Terbaru
            </h2>

            <div className="space-y-5 text-sm">
              {[
                {
                  title: "Dataset Batas Desa Kedung Waringin berhasil diunggah",
                  time: "2 jam lalu",
                  color: "green",
                },
                {
                  title: "Dataset Tata Guna Lahan diperbarui",
                  time: "Kemarin",
                  color: "blue",
                },
                {
                  title: "Pengguna baru ‘Rifky’ ditambahkan sebagai editor",
                  time: "2 hari lalu",
                  color: "orange",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    className={`w-2 h-2 bg-${item.color}-600 rounded-full mt-2`}
                  ></div>
                  <div>
                    <p className="text-gray-700 leading-snug">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* TABLE SECTION */}
        {/* ===================== */}
        <section className="bg-white border rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Data GIS Terbaru</h2>
            <button className="text-sm text-green-700 hover:underline">
              Lihat Semua
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-t border-gray-100">
              <thead className="text-xs uppercase text-gray-600 bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Nama Dataset</th>
                  <th className="px-4 py-3">Kategori</th>
                  <th className="px-4 py-3">Tipe Geometri</th>
                  <th className="px-4 py-3">Tanggal Upload</th>
                  <th className="px-4 py-3">Ukuran</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {[
                  [
                    "Batas Administrasi Desa",
                    "Tata Ruang",
                    "Polygon",
                    "11 Okt 2025",
                    "2.4 MB",
                  ],
                  [
                    "Jaringan Jalan Utama",
                    "Infrastruktur",
                    "Line",
                    "09 Okt 2025",
                    "1.1 MB",
                  ],
                  ["Sebaran UMKM", "Ekonomi", "Point", "07 Okt 2025", "530 KB"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {row.map((cell, c) => (
                      <td key={c} className="px-4 py-3">
                        {c === 0 ? <b>{cell}</b> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
