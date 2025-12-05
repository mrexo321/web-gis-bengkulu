import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { X, Upload, ArrowLeft } from "lucide-react";
import { attachmentService } from "../../services/attachmentService";
import { featureService } from "../../services/featureService";

// import featureService from "@/services/featureService";
// import attachmentService from "@/services/attachmentService";

const FeatureEditPage = () => {
  const { layerId, featureId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [uploadOpen, setUploadOpen] = useState(false);
  const uploadInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // ============================================================
  // GET FEATURE DATA
  // ============================================================
  const { data: feature, isLoading } = useQuery({
    queryKey: ["feature", layerId, featureId],
    queryFn: () => featureService.getOne(layerId, featureId),
  });

  // ============================================================
  // EDIT FEATURE FORM SUBMIT
  // ============================================================
  const editMutation = useMutation({
    mutationFn: (data) => featureService.update(layerId, featureId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["feature", layerId, featureId]);
      navigate(`/layers/${layerId}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const payload = {
      name: form.get("name"),
      properties: {},
    };

    for (let [key, value] of form.entries()) {
      if (key !== "name") {
        payload.properties[key] = value;
      }
    }

    editMutation.mutate(payload);
  };

  // ============================================================
  // UPLOAD ATTACHMENT MUTATION
  // ============================================================
  const uploadMutation = useMutation({
    mutationFn: () =>
      attachmentService.addAttachment(layerId, featureId, selectedFile),
    onSuccess: () => {
      queryClient.invalidateQueries(["feature", layerId, featureId]);
      setUploadOpen(false);
      setSelectedFile(null);
    },
  });

  const handleUploadSubmit = () => {
    if (!selectedFile) return;
    uploadMutation.mutate();
  };

  if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center mb-4">
        <button
          className="p-2 mr-3"
          onClick={() => navigate(`/layers/${layerId}`)}
        >
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-bold">Edit Feature</h1>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-3 bg-white p-4 shadow rounded-xl"
      >
        <div>
          <label className="text-sm font-medium">Nama</label>
          <input
            name="name"
            defaultValue={feature.name}
            className="w-full p-2 border rounded"
          />
        </div>

        <h3 className="mt-4 font-semibold">Properties</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(feature.properties || {}).map(([key, value]) => (
            <div key={key}>
              <label className="text-xs font-medium">{key}</label>
              <input
                name={key}
                defaultValue={value}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>

        <button
          className="bg-blue-600 text-white w-full py-2 rounded mt-3"
          disabled={editMutation.isPending}
        >
          {editMutation.isPending ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </form>

      {/* ATTACHMENTS */}
      <div className="bg-white p-4 shadow rounded-xl mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Attachment</h3>
          <button
            className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => setUploadOpen(true)}
          >
            <Upload size={16} /> Upload
          </button>
        </div>

        {feature.attachments?.length === 0 && (
          <p className="text-gray-500 text-sm">Belum ada attachment.</p>
        )}

        <div className="space-y-2">
          {feature.attachments?.map((att) => (
            <div
              key={att.id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{att.filename}</p>
                <a
                  href={att.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  Buka File
                </a>
              </div>

              {/* DELETE HANDLED BY YOU */}
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          UPLOAD MODAL
      ============================================================ */}
      {uploadOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-3 z-[9999]">
          <div className="bg-white w-full max-w-md rounded-xl p-5 relative">
            <button
              onClick={() => setUploadOpen(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="text-lg font-semibold mb-3">Upload Attachment</h2>

            <input
              type="file"
              ref={uploadInputRef}
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="border w-full p-2 rounded"
            />

            <button
              onClick={handleUploadSubmit}
              className="bg-blue-600 text-white w-full py-2 rounded mt-4"
              disabled={!selectedFile || uploadMutation.isPending}
            >
              {uploadMutation.isPending ? "Mengupload..." : "Upload"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureEditPage;
