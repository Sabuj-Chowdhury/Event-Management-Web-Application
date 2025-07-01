import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SectionTitle from "../components/SectionTitle";
import MyEventCard from "../components/MyEventCard";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);

  const fetchMyEvents = async () => {
    try {
      const res = await axios.get("/events/my-events");
      setMyEvents(res.data);
    } catch (err) {
      toast.error("Failed to fetch your events");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/events/${id}`);
          Swal.fire("Deleted!", "Your event has been deleted.", "success");
          fetchMyEvents();
        } catch (err) {
          toast.error("Failed to delete event");
        }
      }
    });
  };

  useEffect(() => {
    fetchMyEvents();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <SectionTitle
        title="My Events"
        subtitle="Manage the events you've created"
      />

      {myEvents.length === 0 ? (
        <p className="text-center text-base-content text-opacity-70">
          You haven't created any events yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myEvents.map((event) => (
            <MyEventCard
              key={event._id}
              event={event}
              onDelete={() => handleDelete(event._id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyEvents;
