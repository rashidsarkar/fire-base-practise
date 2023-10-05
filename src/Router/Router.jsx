import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import SingUp from "../Pages/SingUp";
import UserControl from "../Pages/UserControl";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserControl></UserControl>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
