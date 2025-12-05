import axiosInstance from "../api/axiosInstance";

export const featureService = {
  // Ambil semua kursus
  async getOne(layerId: string, featureId: string) {
    const response = await axiosInstance.get(
      `/feature/${layerId}/${featureId}`
    );

    return response.data.data;
  },
  async delete(layerId: string, featureId: string) {
    const response = await axiosInstance.delete(
      `/feature/${layerId}/${featureId}`
    );

    return response.data.data;
  },

  async createDetail(layerId, payload) {
    const formattedPayload = {
      name: payload.name || "",
      properties: {
        JNSRSR: payload.properties?.JNSRSR ?? null,
        NAMOBJ: payload.properties?.NAMOBJ ?? "",
        ORDE01: payload.properties?.ORDE01 ?? null,
        ORDE02: payload.properties?.ORDE02 ?? null,
        REMARK: payload.properties?.REMARK ?? "",
        SBDATA: payload.properties?.SBDATA ?? "",
        STSJRN: payload.properties?.STSJRN ?? null,
        WADMKK: payload.properties?.WADMKK ?? "",
        WADMPR: payload.properties?.WADMPR ?? "",
      },
      geom: {
        type: payload.geom?.type || "Polygon",
        coordinates: payload.geom?.coordinates || [],
      },
    };

    const response = await axiosInstance.post(
      `/feature/${layerId}`,
      formattedPayload
    );

    return response.data.data;
  },
};
