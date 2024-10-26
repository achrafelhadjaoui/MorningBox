import api from "../Api.js";

export const UpdateUser = async (id, updatedData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found in localStorage.");
      throw new Error("Authentication token is missing.");
    }

    const response = await api.put(`/users/${id}`, updatedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("User updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error.response?.data || "Failed to update user";
  }
};
