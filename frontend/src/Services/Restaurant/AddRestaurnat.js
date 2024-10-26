import api from "../Api.js";

export const AddRestaurant = async (restaurantData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found in localStorage.");
      throw new Error("Authentication token is missing.");
    }

    const response = await api.post("/restaurant", restaurantData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("Restaurant added successfully:", response.data);
    return response.data; // Return the added restaurant data or response as needed
  } catch (error) {
    console.error("Failed to add restaurant:", error);
    throw error.response?.data || "Failed to add restaurant";
  }
};
