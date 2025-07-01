import { useState } from "react";
import toast from "react-hot-toast";

import axios from "axios";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router";

const AddEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/events", formData);
      toast.success("Event created successfully!");
      navigate("/events");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to create event.");
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <SectionTitle
        title="Create New Event"
        subtitle="Fill out the form below to publish a new event."
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none"
        />
        <input
          type="text"
          name="name"
          placeholder="Organizer Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none"
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none"
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="textarea textarea-bordered w-full focus:outline-none"
          rows={4}
        />

        <button type="submit" className="btn btn-accent w-full text-white">
          Add Event
        </button>
      </form>
    </section>
  );
};

export default AddEvent;
