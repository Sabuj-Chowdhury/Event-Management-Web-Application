import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import axios from "axios";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", formData);
      toast.success("Registration successful! Please log in.");
      navigate("/login"); //  Redirect to login page
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow p-8 space-y-6">
        <SectionTitle
          title="Create an Account"
          subtitle="Join EventEase to host and explore amazing events!"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium text-base-content">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label font-medium text-base-content">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label font-medium text-base-content">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label font-medium text-base-content">
              Photo URL (optional)
            </label>
            <input
              type="url"
              name="photoURL"
              className="input input-bordered w-full focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-accent w-full text-white">
            Register
          </button>
        </form>

        <p className="text-sm text-center text-base-content text-opacity-70">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-medium">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
