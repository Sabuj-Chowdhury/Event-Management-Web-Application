import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Outlet */}
      <div>
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  );
};

export default MainLayout;
