import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import SectionTitle from "../components/SectionTitle";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { login } = useContext(AuthContext);

  const location = useLocation();
  const from = location?.state || "/";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);
    if (success) navigate(from, { replace: true });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow p-8 space-y-6">
        <SectionTitle
          title="Login to EventEase"
          subtitle="Welcome back! Please enter your credentials to continue."
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium text-base-content">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full focus:outline-none"
              required
              onChange={handleChange}
              value={formData.email}
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
              value={formData.password}
            />
          </div>

          <button type="submit" className="btn btn-accent w-full text-white">
            Login
          </button>
        </form>

        <p className="text-sm text-center text-base-content text-opacity-70">
          Don’t have an account?{" "}
          <Link to="/register" className="text-accent font-medium">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
