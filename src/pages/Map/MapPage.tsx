import { MapContainer, TileLayer, GeoJSON, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useMemo } from "react";

const MapPage = () => {
  const [activeLayers, setActiveLayers] = useState([]);
  const [geojsonData, setGeojsonData] = useState({});
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const center = [-3.8106, 102.2955];

  // ====== LOAD SEMUA GEOJSON ======
  useEffect(() => {
    const layerFiles = [
      "air_minum",
      "drainase",
      "energi",
      "persampahan",
      "prasarana_lain",
      "pusat_pelayanan",
      "sda",
      "telekomunikasi",
      "transportasi",
      "zonasi",
    ];

    Promise.all(
      layerFiles.map((name) =>
        fetch(`/data/${name}.json`)
          .then((res) => res.json())
          .then((data) => ({ name, data }))
          .catch(() => {
            console.warn(`⚠️ Gagal memuat ${name}.json`);
            return null;
          })
      )
    ).then((results) => {
      const valid = results.filter(Boolean);
      const mapData = Object.fromEntries(valid.map((r) => [r.name, r.data]));
      setGeojsonData(mapData);
    });
  }, []);

  // ====== LIST LAYER ======
  const layerList = useMemo(
    () => [
      { name: "Zonasi", key: "zonasi", category: "RDTR" },
      { name: "Transportasi", key: "transportasi", category: "RTRW" },
      { name: "Air Minum", key: "air_minum", category: "RTRW" },
      { name: "Drainase", key: "drainase", category: "RTRW" },
      { name: "Energi", key: "energi", category: "RTRW" },
      { name: "Persampahan", key: "persampahan", category: "RTRW" },
      { name: "Prasarana Lain", key: "prasarana_lain", category: "RTRW" },
      { name: "Pusat Pelayanan", key: "pusat_pelayanan", category: "RTRW" },
      { name: "SDA", key: "sda", category: "Peta Administrasi" },
      { name: "Telekomunikasi", key: "telekomunikasi", category: "Lainnya" },
    ],
    []
  );

  // ====== WARNA PER LAYER ======
  const getLayerColor = (key) => {
    const colors = {
      zonasi: "#8b5cf6",
      transportasi: "#fb923c",
      air_minum: "#38bdf8",
      drainase: "#3b82f6",
      energi: "#facc15",
      persampahan: "#22c55e",
      prasarana_lain: "#9ca3af",
      pusat_pelayanan: "#ef4444",
      sda: "#78350f",
      telekomunikasi: "#ec4899",
    };
    return colors[key] || "#000";
  };

  // ====== TOGGLE AKTIF / NONAKTIF ======
  const toggleLayer = (key) =>
    setActiveLayers((prev) =>
      prev.includes(key) ? prev.filter((l) => l !== key) : [...prev, key]
    );

  const clearLayers = () => setActiveLayers([]);

  // ====== TRACK KOORDINAT ======
  const LocationTracker = () => {
    useMapEvents({
      mousemove: (e) => setCoords({ lat: e.latlng.lat, lng: e.latlng.lng }),
    });
    return null;
  };

  // ====== EVENT KLIK FEATURE ======
  const onEachFeature = (feature, layer, layerName) => {
    layer.on("click", () => {
      const props = feature.properties || {};
      const name = props.nama || layerName;
      const desc =
        props.deskripsi ||
        `Informasi detail mengenai ${layerName}. Data bersifat ilustratif.`;
      console.log(`🟢 Klik pada ${name}: ${desc}`);
    });
  };

  // ====== FILTER LAYER (CARI) ======
  const filteredLayers = useMemo(
    () =>
      layerList.filter((l) =>
        l.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, layerList]
  );

  return (
    <div className="relative w-full h-screen bg-gray-100 font-inter overflow-hidden">
      {/* ===== MAP ===== */}
      <MapContainer
        center={center}
        zoom={12.5}
        className="w-full h-full"
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <LocationTracker />

        {/* Render Layer Aktif */}
        {Object.entries(geojsonData).map(([name, data]) =>
          activeLayers.includes(name) ? (
            <GeoJSON
              key={name}
              data={data}
              onEachFeature={(f, l) => onEachFeature(f, l, name)}
              style={{
                color: getLayerColor(name),
                weight: 2,
                fillOpacity: 0.4,
              }}
            />
          ) : null
        )}
      </MapContainer>

      {/* ===== HEADER ===== */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full px-6 py-2 text-gray-800 font-semibold flex items-center gap-2 z-[1000] border border-gray-200">
        <img src="/logo.png" alt="logo" className="w-5 h-5" />
        <span>Kota Bengkulu</span>
      </div>

      {/* ===== BUTTON KATALOG ===== */}
      <button
        onClick={() => setCatalogOpen(!catalogOpen)}
        className="absolute top-3 right-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow z-[1100] text-sm font-medium flex items-center gap-2 transition-all duration-200"
      >
        📚 Katalog Layer
      </button>

      {/* ===== KOORDINAT ===== */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-xs px-4 py-1.5 rounded-full shadow border border-gray-200 z-[1000] font-medium text-gray-700">
        Latitude: {coords.lat} | Longitude: {coords.lng}
      </div>

      {/* ===== SIDEBAR KATALOG ===== */}
      <div
        className={`absolute top-0 right-0 h-full w-[350px] bg-white shadow-2xl z-[1500] transition-transform duration-300 ease-in-out ${
          catalogOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-emerald-700 text-white px-5 py-4 flex justify-between items-center">
          <h2 className="font-semibold text-base">📚 Katalog Layer</h2>
          <button
            onClick={() => setCatalogOpen(false)}
            className="text-white hover:text-red-300 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Cari layer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        {/* Daftar Layer */}
        <div className="p-4 overflow-y-auto h-[calc(100%-150px)] space-y-3">
          {filteredLayers.length ? (
            filteredLayers.map(({ name, key, category }) => {
              const active = activeLayers.includes(key);
              return (
                <div
                  key={key}
                  onClick={() => toggleLayer(key)}
                  className={`cursor-pointer border rounded-xl p-3 transition-all ${
                    active
                      ? "bg-emerald-50 border-emerald-500"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h4
                      className={`font-medium ${
                        active ? "text-emerald-700" : "text-gray-800"
                      }`}
                    >
                      {name}
                    </h4>
                    {active && <span className="text-emerald-600">✔️</span>}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    <span className="mr-2">📍 Kota Bengkulu</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded">
                      {category}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-sm text-center mt-10">
              Tidak ada layer ditemukan
            </p>
          )}
        </div>

        {/* Tombol Hapus Semua */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={clearLayers}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium"
          >
            🗑️ Hapus Semua Layer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
