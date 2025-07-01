import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";

const filterOptions = [
  { value: "", label: "All Dates" },
  { value: "today", label: "Today" },
  { value: "this_week", label: "This Week" },
  { value: "last_week", label: "Last Week" },
  { value: "this_month", label: "This Month" },
  { value: "last_month", label: "Last Month" },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const fetchEvents = async () => {
    try {
      const res = await axios.get("/events", {
        params: { search, filter },
      });
      setEvents(res.data);
    } catch (err) {
      toast.error("Failed to fetch events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [search, filter]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <SectionTitle
        title="Browse All Events"
        subtitle="Find and join events that match your interests and schedule."
      />

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full md:w-1/2 focus:outline-none"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-full md:w-48"
        >
          {filterOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Event Cards */}
      {events.length === 0 ? (
        <p className="text-center text-base-content text-opacity-70">
          No events found.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event._id} event={event} onRefresh={fetchEvents} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;
