import axiosInstance from "../api/axiosInstance";

export const userService = {
  async getAllUsers() {
    const response = await axiosInstance.get(`/user`);
    return response.data;
  },
  async createUser(payload) {
    const response = await axiosInstance.post(`/user`, payload);
    return response.data;
  },
  async updateUser(id, payload) {
    const response = await axiosInstance.put(`/user/${id}`, payload);
    return response.data;
  },
  async deleteUser(id) {
    const response = await axiosInstance.delete(`/user/${id}`);
    return response.data;
  },
  async resetPassword(id, payload) {
    const response = await axiosInstance.put(
      `/user/${id}/reset-password`,
      payload,
    );
    return response.data;
  },
};
