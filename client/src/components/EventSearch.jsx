import { useState } from "react";
import { useNavigate } from "react-router";

const EventSearch = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = new URLSearchParams();
    if (search) query.append("search", search);
    if (category) query.append("category", category);

    navigate(`/events?${query.toString()}`);
  };

  return (
    <div className="bg-base-100 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Find Events
        </h2>
        <p className="text-base-content text-opacity-80">
          Search by keyword or explore by category to find your next favorite
          event.
        </p>

        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-4 mt-6 justify-center items-center"
        >
          <input
            type="text"
            placeholder="Search by title, location, etc."
            className="input input-bordered w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered w-full md:w-1/4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Art">Art</option>
            <option value="Sports">Sports</option>
            <option value="Health">Health</option>
          </select>

          <button type="submit" className="btn btn-accent w-full md:w-auto">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventSearch;
