import React, { useState } from 'react';
import { AddRestaurant } from '../../Services/Restaurant/AddRestaurnat.js';

const RestaurantForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    gerant: '',
    menu: '',
  });

  // State to manage error messages
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Check if all required fields are filled
    const { name, address, gerant, menu } = formData;
    if (!name || !address) {
      setError('All fields are required.');
      return; // Prevent submission if validation fails
    }

    try {
      const addedRestaurant = await AddRestaurant(formData);
      console.log("Added restaurant:", addedRestaurant);
      // Clear the form on successful submission
      setFormData({
        name: '',
        address: '',
        gerant: '',
        menu: '',
      });
    } catch (error) {
      console.error("Error adding restaurant:", error);
      setError("Failed to add restaurant. Please try again.");
    }
  };

  return (
    <form className="font-[sans-serif] max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-gray-800 text-center text-2xl font-bold mb-6">
        Restaurant Form
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative flex items-center">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Restaurant Name"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
            required
          />
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
            required
          />
        </div>
        <div className="relative flex items-center">
          <select
            name="gerant"
            value={formData.gerant}
            onChange={handleChange}
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
          
          >
            <option value="" disabled>
              Select available gerant
            </option>
            <option value="gerant1">Gerant 1</option>
            <option value="gerant2">Gerant 2</option>
            <option value="gerant3">Gerant 3</option>
            {/* Add more options as necessary */}
          </select>
        </div>
        <div className="relative flex items-center">
          <select
            name="menu"
            value={formData.menu}
            onChange={handleChange}
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
          
          >
            <option value="" disabled>
              Select available menu
            </option>
            <option value="menu1">Menu 1</option>
            <option value="menu2">Menu 2</option>
            <option value="menu3">Menu 3</option>
            {/* Add more options as necessary */}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 px-6 py-2.5 text-sm w-full bg-[#007bff] hover:bg-[#006bff] text-white rounded transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;
