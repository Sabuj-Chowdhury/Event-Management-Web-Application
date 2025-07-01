import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/events", {
        params: { search },
      });
      setEvents(res.data);
    } catch (err) {
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [search]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <SectionTitle
        title="Browse All Events"
        subtitle="Find and join events that match your interests and schedule."
      />

      {/*  Search Bar */}
      <div className="w-full max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search events by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full focus:outline-none"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      ) : events.length === 0 ? (
        <p className="text-center text-base-content text-opacity-70">
          No events found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event._id} event={event} onRefresh={fetchEvents} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;
