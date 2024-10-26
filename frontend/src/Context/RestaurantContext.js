import React, { createContext, useState, useEffect, useContext } from 'react';
import { GetRestaurant } from '../Services/Restaurant/GetRestaurant.js';

const RestaurantsContext = createContext();

const RestaurantsProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRestaurants = async () => {
            try {
                const restaurantsData = await GetRestaurant();
                setRestaurants(restaurantsData.restaurants);
            } catch (error) {
                setError("Failed to load restaurants. Please try again.");
                console.error("Error loading restaurants:", error);
            } finally {
                setLoading(false);
            }
        };
        loadRestaurants();
    }, []);

    return (
        <RestaurantsContext.Provider value={{ restaurants, loading, error, setRestaurants }}>
            {children}
        </RestaurantsContext.Provider>
    );
};

const useRestaurantContext = () => useContext(RestaurantsContext);

export { RestaurantsContext, RestaurantsProvider, useRestaurantContext };
