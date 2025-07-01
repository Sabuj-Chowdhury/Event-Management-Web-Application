import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/events")
      .then((res) => setEvents(res.data.slice(0, 3)))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8 bg-base-200">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-primary">Featured Events</h2>
        <p className="text-base-content text-opacity-70">
          Explore some of the most exciting upcoming events on EventEase.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="card bg-base-100 shadow-md border border-base-300 rounded-xl"
            >
              {/* Banner with emoji and gradient */}
              <div className="h-40 flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-t-xl">
                <span className="text-3xl font-bold text-primary">
                  🎉 {event.title}
                </span>
              </div>

              <div className="card-body space-y-2">
                <p className="text-sm text-base-content text-opacity-70">
                  Hosted by <span className="font-medium">{event.name}</span>
                </p>
                <p className="text-sm">📍 {event.location}</p>
                <p className="text-sm">
                  📅 {event.date} 🕒 {event.time}
                </p>
                <p className="text-sm line-clamp-3">{event.description}</p>

                <div className="card-actions justify-center mt-4">
                  <Link
                    to={`/events/${event._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/events" className="btn btn-accent mt-6">
          View All Events
        </Link>
      </div>
    </section>
  );
};

export default FeaturedEvents;
