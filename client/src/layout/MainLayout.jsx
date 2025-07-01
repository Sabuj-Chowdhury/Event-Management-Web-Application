import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-black">
      {/* Navbar */}

      {/* Outlet */}
      <div>
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  );
};

export default MainLayout;
