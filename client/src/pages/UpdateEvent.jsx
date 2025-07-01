import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import SectionTitle from "../components/SectionTitle";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  // Fetch existing event
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/events/my-events`);
        const event = res.data.find((e) => e._id === id);
        if (!event) return toast.error("Event not found");

        setFormData({
          title: event.title,
          date: event.date,
          time: event.time,
          location: event.location,
          description: event.description,
        });
      } catch (err) {
        toast.error("Failed to fetch event");
      }
    };

    fetchEvent();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/events/${id}`, formData);
      toast.success("Event updated successfully!");
      navigate("/my-events");
    } catch (err) {
      toast.error("Failed to update event");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <SectionTitle
        title="Update Event"
        subtitle="Make changes to your event details"
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          className="input input-bordered w-full"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          className="input input-bordered w-full"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          className="input input-bordered w-full"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          className="textarea textarea-bordered w-full"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button className="btn btn-accent w-full text-white" type="submit">
          Update Event
        </button>
      </form>
    </section>
  );
};

export default UpdateEvent;
