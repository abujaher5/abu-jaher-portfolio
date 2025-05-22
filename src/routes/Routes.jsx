import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProjectDetails from "../components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);
export default router;
