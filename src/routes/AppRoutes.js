import { createBrowserRouter } from "react-router-dom";
import Browse from "../components/Browse";
import Login from "../components/Login";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
export default routes;
