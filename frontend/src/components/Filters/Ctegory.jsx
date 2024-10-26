const FilterByCtegory = () => {
  return (
    <div className="font-sans p-4">
      <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg">
       
        <li
          id="profileTab"
          className="tab flex flex-col justify-center items-center border-2 hover:border-blue-600 rounded-lg bg-gray-100 text-sm font-semibold text-gray-500 hover:text-blue-600 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          Ftoor Baldi
        </li>
        <li
          id="inboxTab"
          className="tab flex flex-col justify-center items-center border-2 hover:border-blue-600 rounded-lg bg-gray-100 text-sm font-semibold text-gray-500 hover:text-blue-600 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          
          Healthy Breakfast
        </li>
        <li
          id="notificationTab"
          className="tab flex flex-col justify-center items-center border-2 hover:border-blue-600 rounded-lg bg-gray-100 text-sm font-semibold text-gray-500 hover:text-blue-600 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          
          Juice
        </li>
      </ul>
    </div>
  );
};

export default FilterByCtegory;
