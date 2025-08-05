import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

export const public_routes = [
  {
    route: "/login",
    element: <Login />,
  },
];
export const private_routes = [
  {
    route: "/",
    element: <HomePage />,
  },
];
