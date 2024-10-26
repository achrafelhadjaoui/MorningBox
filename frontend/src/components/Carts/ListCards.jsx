import FilterByCtegory from "../Filters/Ctegory.jsx";

const Cards = () => {
  return (
    <>
      <FilterByCtegory />
      <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
          Food and Flavours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food1.webp"
                  alt="food1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  Veg Burger with Salad
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$22</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food2.webp"
                  alt="food2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  Spicy Veg Burger
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$24</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food4.webp"
                  alt="food3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  Veggie Burger
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$18</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food5.webp"
                  alt="food4"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  The Best Chickpea Food
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$26</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food6.webp"
                  alt="food5"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  Burgers with fries
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$26</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food7.webp"
                  alt="food7"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  Plate of Pasta
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$18</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food8.webp"
                  alt="food8"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  Vegetable Food
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$11</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/food3.webp"
                  alt="food6"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  Pasta with meatballs
                </h3>
                <h4 className="text-xl text-gray-800 font-bold mt-3">$15</h4>
              </div>
              <button
                type="button"
                className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
