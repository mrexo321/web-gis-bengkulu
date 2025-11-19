import React, { useState } from "react";
import {
  Layers,
  Eye,
  EyeOff,
  Plus,
  Map as MapIcon,
  Info,
  X,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// =========================
// Data GeoJSON Dummy
// =========================
const dataBatasWilayah = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Wilayah A" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [102.23, -3.8],
            [102.35, -3.8],
            [102.35, -3.9],
            [102.23, -3.9],
            [102.23, -3.8],
          ],
        ],
      },
    },
  ],
};

const dataJaringanJalan = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Jalan Utama" },
      geometry: {
        type: "LineString",
        coordinates: [
          [102.25, -3.85],
          [102.34, -3.87],
        ],
      },
    },
  ],
};

const dataSebaranUMKM = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "UMKM A" },
      geometry: {
        type: "Point",
        coordinates: [102.3, -3.86],
      },
    },
  ],
};

const dataPemukiman = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Perumahan Gading Mas" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [102.28, -3.82],
            [102.33, -3.82],
            [102.33, -3.85],
            [102.28, -3.85],
            [102.28, -3.82],
          ],
        ],
      },
    },
  ],
};

const dataSungai = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Sungai Musi" },
      geometry: {
        type: "LineString",
        coordinates: [
          [102.22, -3.84],
          [102.36, -3.88],
        ],
      },
    },
  ],
};

const dataFasilitasKesehatan = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "RS Bengkulu Sehat" },
      geometry: {
        type: "Point",
        coordinates: [102.29, -3.855],
      },
    },
  ],
};

const dataHutanLindung = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Hutan Lindung Bukit Daun" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [102.2, -3.78],
            [102.26, -3.78],
            [102.26, -3.84],
            [102.2, -3.84],
            [102.2, -3.78],
          ],
        ],
      },
    },
  ],
};

// =========================
// Komponen MapLayer
// =========================
const MapLayer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [layers, setLayers] = useState([
    {
      name: "Batas Wilayah",
      kategori: "Administrasi",
      tipe: "Polygon",
      aktif: true,
      data: dataBatasWilayah,
      color: "#22c55e",
    },
    {
      name: "Jaringan Jalan",
      kategori: "Transportasi",
      tipe: "Line",
      aktif: true,
      data: dataJaringanJalan,
      color: "#2563eb",
    },
    {
      name: "Sebaran UMKM",
      kategori: "Ekonomi",
      tipe: "Point",
      aktif: false,
      data: dataSebaranUMKM,
      color: "#f59e0b",
    },
    {
      name: "Pemukiman Penduduk",
      kategori: "Permukiman",
      tipe: "Polygon",
      aktif: true,
      data: dataPemukiman,
      color: "#a855f7",
    },
    {
      name: "Sungai",
      kategori: "Hidrologi",
      tipe: "Line",
      aktif: true,
      data: dataSungai,
      color: "#06b6d4",
    },
    {
      name: "Fasilitas Kesehatan",
      kategori: "Sosial",
      tipe: "Point",
      aktif: true,
      data: dataFasilitasKesehatan,
      color: "#ef4444",
    },
    {
      name: "Hutan Lindung",
      kategori: "Lingkungan",
      tipe: "Polygon",
      aktif: false,
      data: dataHutanLindung,
      color: "#15803d",
    },
  ]);

  const toggleLayer = (name: string) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.name === name ? { ...layer, aktif: !layer.aktif } : layer
      )
    );
  };

  const MapView = ({ fullscreen = false }: { fullscreen?: boolean }) => (
    <MapContainer
      center={[-3.83, 102.3]}
      zoom={11}
      className={`w-full ${fullscreen ? "h-screen" : "h-96"}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {layers.map(
        (layer) =>
          layer.aktif && (
            <GeoJSON
              key={layer.name}
              data={layer.data as any}
              style={{
                color: layer.color,
                weight: 2,
                fillOpacity: 0.3,
              }}
              pointToLayer={(_, latlng) =>
                L.circleMarker(latlng, {
                  radius: 6,
                  fillColor: layer.color,
                  color: layer.color,
                  fillOpacity: 0.8,
                })
              }
            />
          )
      )}
    </MapContainer>
  );

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Peta & Layer</h1>
        <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Tambah Layer Baru
        </button>
      </div>

      {/* Peta */}
      {!isFullscreen && (
        <div className="bg-white border rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Tampilan Peta</h2>
            <button
              onClick={() => setIsFullscreen(true)}
              className="text-sm text-green-700 hover:underline flex items-center gap-1"
            >
              <MapIcon className="w-4 h-4" /> Buka di Mode Penuh
            </button>
          </div>

          <div className="w-full h-96 rounded-lg overflow-hidden">
            <MapView />
          </div>
        </div>
      )}

      {/* Modal Fullscreen */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col">
          <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <h2 className="font-semibold text-gray-800">Peta (Mode Penuh)</h2>
            <button
              onClick={() => setIsFullscreen(false)}
              className="flex items-center gap-1 text-gray-600 hover:text-red-600"
            >
              <X className="w-5 h-5" /> Tutup
            </button>
          </div>
          <div className="flex-1">
            <MapView fullscreen />
          </div>
        </div>
      )}

      {/* Daftar Layer */}
      <div className="bg-white border rounded-xl p-6 mt-8">
        <h2 className="font-semibold text-gray-800 mb-4">Daftar Layer Aktif</h2>

        <table className="w-full text-sm border-t border-gray-100">
          <thead className="text-xs uppercase text-gray-500 bg-gray-50">
            <tr>
              <th className="px-4 py-3">Nama Layer</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Tipe Geometri</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {layers.map((layer) => (
              <tr key={layer.name}>
                <td className="px-4 py-3 font-medium">{layer.name}</td>
                <td className="px-4 py-3">{layer.kategori}</td>
                <td className="px-4 py-3">{layer.tipe}</td>
                <td
                  className={`px-4 py-3 ${
                    layer.aktif ? "text-green-700" : "text-gray-500"
                  }`}
                >
                  {layer.aktif ? "Aktif" : "Nonaktif"}
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  {layer.aktif ? (
                    <button
                      onClick={() => toggleLayer(layer.name)}
                      className="p-2 text-gray-500 hover:text-red-600"
                    >
                      <EyeOff className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleLayer(layer.name)}
                      className="p-2 text-gray-500 hover:text-green-700"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  <button className="p-2 text-gray-500 hover:text-blue-600">
                    <Info className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default MapLayer;
