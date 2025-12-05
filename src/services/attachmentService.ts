import axiosInstance from "../api/axiosInstance";

export const attachmentService = {
  async addAttachment(layerId: string, featureId: string, formData: FormData) {
    const response = await axiosInstance.post(
      `/attachment/${layerId}/${featureId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },
};
