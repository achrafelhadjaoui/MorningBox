import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UserButton = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle Add Restaurant button click
  const handleAddRestaurant = () => {
    navigate('/add-restaurant'); // Navigate to the Add Restaurant form route
  };

  return (
    <div className="font-[sans-serif] w-max mx-auto bg-blue-600 rounded-lg overflow-hidden flex mt-4">
      <button
        type="button"
        className="px-6 py-3 text-white text-sm tracking-wider font-semibold border-none outline-none hover:bg-blue-700 active:bg-blue-600"
      >
        Assign Gerant
      </button>
    </div>
  );
};

export default UserButton;
