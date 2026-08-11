import React from "react";
import { RouterProvider } from "react-router";
import Header from "./Header";
import Login from "./Login";
import routes from "../routes/AppRoutes";
const Body = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default Body;
