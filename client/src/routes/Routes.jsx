import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Events from "../pages/Events";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddEvent from "../pages/AddEvent";
import MyEvents from "../pages/MyEvents";
import UpdateEvent from "../pages/UpdateEvent";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-event",
        element: (
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-events",
        element: (
          <PrivateRoute>
            <MyEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-event/:id",
        element: (
          <PrivateRoute>
            <UpdateEvent />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
