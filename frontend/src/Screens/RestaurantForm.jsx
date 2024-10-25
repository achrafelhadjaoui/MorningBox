const RestaurantForm = () => {
    return (
      <form className="font-[sans-serif] max-w-4xl mx-auto">
        <h2 className="text-gray-800 text-center text-2xl font-bold mb-6">
          Restaurant Form
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Restaurant Name"
              className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
            />
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Address"
              className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
            />
          </div>
          <div className="relative flex items-center">
            <select
              className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
              defaultValue=""
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
              className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
              defaultValue=""
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
          type="button"
          className="mt-8 px-6 py-2.5 text-sm w-full bg-[#007bff] hover:bg-[#006bff] text-white rounded transition-all"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default RestaurantForm;
  