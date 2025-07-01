import axios from "axios";
import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:5000/api";

// token in axios headers if it exists
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await axios.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        console.error("Auth check failed:", err.response?.data || err.message);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // LOGIN
  const login = async (email, password) => {
    try {
      const res = await axios.post("/auth/login", { email, password });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(user);
      toast.success("Logged in successfully!");
      return true;
    } catch (err) {
      toast.error(err?.response?.data?.error || "Login failed");
      return false;
    }
  };

  //  LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    toast("Logged out");
  };

  const contextValue = { user, login, logout, loading };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
