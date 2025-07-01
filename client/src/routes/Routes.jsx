import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Events from "../pages/Events";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddEvent from "../pages/AddEvent";
import MyEvents from "../pages/MyEvents";

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
        element: <Events />,
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
        element: <AddEvent />,
      },
      {
        path: "/my-events",
        element: <MyEvents />,
      },
    ],
  },
]);

export default router;
