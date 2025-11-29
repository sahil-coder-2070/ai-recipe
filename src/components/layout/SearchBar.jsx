import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className=" font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Find Your Perfect Recipe
          </h2>
          <p className="text-neutral-600 text-base">
            Search thousands of recipes by ingredients, cuisine, or dish name
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search recipes, ingredients, or cuisines…"
            className="w-full pl-16 pr-6 py-5 bg-white text-lg rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 shadow-lg "
          />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-linear-to-r from-orange-500 to-orange-600  text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm hover:scale-95">
            Search
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Italian",
            "Mexican",
            "Asian",
            "Vegetarian",
            "Quick & Easy",
            "Desserts",
          ].map((tag) => (
            <button
              key={tag}
              className="px-6 py-2 bg-white hover:bg-orange-500 hover:text-white text-gray-700 rounded-full border border-gray-200 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
