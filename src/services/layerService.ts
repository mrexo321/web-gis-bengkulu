import axiosInstance from "../api/axiosInstance";

export const layerService = {
  // Ambil semua kursus
  async getAll() {
    const response = await axiosInstance.get("/layer");

    return response.data.data;
  },

  async getSpecificLayer(layerId: string) {
    const response = await axiosInstance.get(`/layer/${layerId}/geojson`);

    return response.data;
  },

  async getSpecificLayerDashboard(layerId: string) {
    const response = await axiosInstance.get(`/layer/${layerId}`);

    return response.data.data;
  },

  async createLayer(payload: {
    name: string;
    description: string;
    geometryType: string; // LINE | POINT | POLYGON
    color: string;
    iconUrl: string | null;
    metadata: {
      crs: {
        type: string;
        properties: {
          name: string;
        };
      };
      z_coordinate_resolution: number;
      xy_coordinate_resolution: number;
    };
  }) {
    const response = await axiosInstance.post(`/layer`, payload);
    return response.data;
  },

  async updateLayer(
    layerId: string,
    payload: {
      name: string;
      description: string;
      geometryType: string; // LINE | POINT | POLYGON
      color: string;
      iconUrl: string | null;
      metadata: {
        crs: {
          type: string;
          properties: {
            name: string;
          };
        };
        z_coordinate_resolution: number;
        xy_coordinate_resolution: number;
      };
    }
  ) {
    return await axiosInstance.put(`/layer/${layerId}`, payload);
  },

  async deleteLayer(layerId: string) {
    const response = await axiosInstance.delete(`/layer/${layerId}`);
    return response.data;
  },
};
