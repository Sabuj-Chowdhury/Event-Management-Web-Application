import { CalendarDays, Clock, MapPin } from "lucide-react";
import { useContext } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

const EventCard = ({ event, onRefresh }) => {
  const { user } = useContext(AuthContext);

  const handleJoin = async () => {
    if (!user) return toast.error("Please log in to join this event.");

    try {
      await axios.post(`/events/join/${event._id}`);
      toast.success("Joined event successfully!");
      onRefresh();
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to join event.");
    }
  };

  return (
    <div className="bg-base-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-base-300">
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-semibold text-accent">{event.title}</h3>
        <p className="text-sm text-base-content text-opacity-80">
          Hosted by <span className="font-medium">{event.name}</span>
        </p>

        <div className="flex items-center gap-2 text-sm text-base-content">
          <CalendarDays className="w-4 h-4" />
          <span>{event.date}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-base-content">
          <Clock className="w-4 h-4" />
          <span>{event.time}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-base-content">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>

        <p className="text-sm line-clamp-3 text-base-content text-opacity-80">
          {event.description}
        </p>

        <p className="text-xs text-base-content text-opacity-50">
          Attendees: {event.attendeeCount}
        </p>

        <div className="pt-3">
          <button
            onClick={handleJoin}
            className="btn btn-accent btn-sm text-white w-full"
          >
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
