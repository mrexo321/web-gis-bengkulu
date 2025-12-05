import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil, Plus, Trash, X } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import { layerService } from "../services/layerService";
import { featureService } from "../services/featureService";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Polygon,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

const GeometryDrawer = ({ type, onChange }) => {
  const [points, setPoints] = useState([]);

  useMapEvents({
    click(e) {
      const newPoint = [e.latlng.lng, e.latlng.lat]; // lng, lat
      const updated = [...points, newPoint];

      setPoints(updated);
      onChange(updated); // send back to parent
    },
  });

  return (
    <>
      {type === "Point" && points[0] && (
        <Marker position={[points[0][1], points[0][0]]} />
      )}

      {type === "LineString" && points.length > 1 && (
        <Polyline positions={points.map((p) => [p[1], p[0]])} />
      )}

      {type === "Polygon" && points.length > 2 && (
        <Polygon positions={points.map((p) => [p[1], p[0]])} />
      )}
    </>
  );
};

const LayerDetailPage = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedFeatureId, setSelectedFeatureId] = useState(null);

  // 🟢 Tambahkan state yang hilang
  const [geomType, setGeomType] = useState("Point");
  const [coordinates, setCoordinates] = useState([]);

  // ============================
  // GET LAYER
  // ============================
  const { data: layer, isLoading: loadingLayer } = useQuery({
    queryKey: ["layer", id],
    queryFn: () => layerService.getSpecificLayer(id),
  });

  // ============================
  // GET ALL FEATURES
  // ============================
  const { data: detailLayer } = useQuery({
    queryKey: ["details-layer", id],
    queryFn: () => layerService.getSpecificLayerDashboard(id),
  });

  const features = detailLayer?.spatialItem || [];

  console.log(detailLayer);

  // ============================
  // GET SINGLE FEATURE (edit)
  // ============================
  const { data: selectedFeature, isLoading: featureLoading } = useQuery({
    queryKey: ["feature", id, selectedFeatureId],
    queryFn: () => featureService.getOne(id, selectedFeatureId),
    enabled: !!selectedFeatureId,
  });

  // ============================
  // ADD FEATURE
  // ============================
  const addMutation = useMutation({
    mutationFn: (payload) => layerService.createDetail(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["details-layer", id]);
      setIsOpenAddModal(false);
      setCoordinates([]);
    },
  });

  // ============================
  // UPDATE FEATURE
  // ============================
  const editMutation = useMutation({
    mutationFn: ({ featureId, data }) =>
      featureService.update(id, featureId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["details-layer", id]);
      setEditModalOpen(false);
    },
  });

  // ============================
  // DELETE FEATURE
  // ============================
  const deleteMutation = useMutation({
    mutationFn: (featureId) => featureService.delete(id, featureId),
    onSuccess: () => {
      queryClient.invalidateQueries(["details-layer", id]);
    },
  });

  // -----------------------------
  // SUBMIT ADD FEATURE
  // -----------------------------
  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const payload = {
      name: form.get("name"),
      properties: {
        JNSRSR: form.get("JNSRSR"),
        NAMOBJ: form.get("NAMOBJ"),
        ORDE01: form.get("ORDE01"),
        ORDE02: form.get("ORDE02"),
        REMARK: form.get("REMARK"),
        SBDATA: form.get("SBDATA"),
        STSJRN: form.get("STSJRN"),
        WADMKK: form.get("WADMKK"),
        WADMPR: form.get("WADMPR"),
      },
      geom: {
        type: geomType,
        coordinates:
          geomType === "Polygon"
            ? [coordinates] // polygon harus wrap array
            : coordinates,
      },
    };

    addMutation.mutate(payload);
  };

  // -----------------------------
  // EDIT (open)
  // -----------------------------
  const handleEditClick = (fid) => {
    setSelectedFeatureId(fid);
    setEditModalOpen(true);
  };

  // -----------------------------
  // SUBMIT EDIT FEATURE
  // -----------------------------
  const handleSubmitEdit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const updated = {
      name: form.get("name"),
      properties: {},
    };

    for (let [key, value] of form.entries()) {
      if (key !== "name") updated.properties[key] = value;
    }

    editMutation.mutate({
      featureId: selectedFeatureId,
      data: updated,
    });
  };

  if (loadingLayer) return <p>Loading...</p>;

  return (
    <DashboardLayout>
      {/* ===================== TOP ===================== */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">Detail Layer: {layer?.name}</h1>

        <button
          onClick={() => {
            setCoordinates([]);
            setGeomType("Point");
            setIsOpenAddModal(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Tambah Detail
        </button>
      </div>

      {/* ===================== LIST FEATURES ===================== */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-medium mb-4">Daftar Detail Layer</h2>

        {features.length === 0 ? (
          <p className="text-gray-500">Belum ada detail.</p>
        ) : (
          <div className="overflow-x-auto max-w-full">
            <table className="min-w-max w-full text-sm border">
              <thead className="bg-gray-100 text-xs uppercase">
                <tr>
                  <th className="p-3 border">Nama</th>
                  <th className="p-3 border">Geom</th>
                  <th className="p-3 border">Properties</th>
                  <th className="p-3 border">Dibuat Pada</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>

              <tbody>
                {features.map((f) => (
                  <tr key={f.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 border">{f.name}</td>
                    <td className="p-3 border">{f.geom?.type}</td>
                    <td className="p-3 border">
                      <pre className="text-xs bg-gray-50 p-2 rounded overflow-auto max-h-40">
                        {JSON.stringify(f.properties, null, 2)}
                      </pre>
                    </td>
                    <td className="p-3 border">{f.createdAt}</td>
                    <td className="p-3 border flex gap-3">
                      <Pencil
                        onClick={() => handleEditClick(f.id)}
                        className="cursor-pointer"
                      />
                      <Trash
                        className="cursor-pointer text-red-600"
                        onClick={() => deleteMutation.mutate(f.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ===================== ADD MODAL ===================== */}
      {isOpenAddModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-3 z-[9999]">
          <div className="bg-white w-full max-w-4xl rounded-xl p-5 relative shadow-xl overflow-y-auto max-h-[95vh]">
            <button
              onClick={() => setIsOpenAddModal(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="text-xl font-semibold mb-4">Tambah Detail Layer</h2>

            <form onSubmit={handleSubmitAdd} className="space-y-5">
              {/* NAME */}
              <div>
                <label className="font-medium">Nama</label>
                <input
                  name="name"
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </div>

              {/* PROPERTIES */}
              <div>
                <label className="font-medium">Properties</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {[
                    "JNSRSR",
                    "NAMOBJ",
                    "ORDE01",
                    "ORDE02",
                    "REMARK",
                    "SBDATA",
                    "STSJRN",
                    "WADMKK",
                    "WADMPR",
                  ].map((p) => (
                    <input
                      key={p}
                      name={p}
                      placeholder={p}
                      className="p-2 border rounded"
                    />
                  ))}
                </div>
              </div>

              {/* GEOM TYPE */}
              <div>
                <label className="font-medium">Tipe Geometry</label>
                <select
                  value={geomType}
                  onChange={(e) => {
                    setGeomType(e.target.value);
                    setCoordinates([]); // reset
                  }}
                  className="w-full p-2 border rounded"
                >
                  <option value="Point">Point</option>
                  <option value="LineString">LineString</option>
                  <option value="Polygon">Polygon</option>
                </select>
              </div>

              {/* DRAW MAP */}
              <div>
                <label className="font-medium">Gambar Geometry</label>
                <div className="h-[350px] border rounded mt-1 overflow-hidden">
                  <MapContainer
                    center={[-3.8205, 102.2815]}
                    zoom={15}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <GeometryDrawer
                      type={geomType}
                      onChange={(coords) => setCoordinates(coords)}
                    />
                  </MapContainer>
                </div>
              </div>

              {/* COORD PREVIEW */}
              <textarea
                readOnly
                className="w-full p-2 border rounded text-xs"
                value={JSON.stringify(coordinates, null, 2)}
              />

              <button className="bg-green-600 text-white w-full py-2 rounded mt-2">
                Simpan Detail Layer
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===================== EDIT MODAL ===================== */}
      {editModalOpen && selectedFeature && !featureLoading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-3 z-[9999]">
          <div className="bg-white w-full max-w-3xl rounded-xl p-5 relative">
            <button
              onClick={() => setEditModalOpen(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="text-xl font-semibold mb-4">
              Edit Feature: {selectedFeature.name}
            </h2>

            <form onSubmit={handleSubmitEdit} className="space-y-3">
              <input
                name="name"
                defaultValue={selectedFeature.name}
                className="w-full p-2 border rounded"
              />

              <div className="grid grid-cols-2 gap-2">
                {Object.entries(selectedFeature.properties).map(
                  ([key, value]) => (
                    <input
                      key={key}
                      name={key}
                      defaultValue={value}
                      className="p-2 border rounded"
                    />
                  )
                )}
              </div>

              <button className="bg-blue-600 text-white w-full py-2 rounded mt-2">
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default LayerDetailPage;
