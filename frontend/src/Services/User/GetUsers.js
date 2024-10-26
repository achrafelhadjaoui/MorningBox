import api from "../Api.js";

export const GetUsers = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found in localStorage.");
      throw new Error("Authentication token is missing.");
    }

    const response = await api.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Fetched users:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to load users:", error);
    throw error.response?.data || "Failed to load users";
  }
};
