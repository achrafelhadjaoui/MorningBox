import api from "../Api.js";

export const GetRestaurant = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found in localStorage.");
      throw new Error("Authentication token is missing.");
    }

    const response = await api.get("/restaurant", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("the restaurant" ,response.data)
    return response.data;
  } catch (error) {
    console.error("Failed to load restaurants:", error);
    throw error.response?.data || "Failed to load restaurants";
  }
};
