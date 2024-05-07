import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./layout/Main";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProviders from "./providers/AuthProviders";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Orders from "./components/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);


