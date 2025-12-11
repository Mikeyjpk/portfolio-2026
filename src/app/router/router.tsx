import { createBrowserRouter } from "react-router-dom";
import HomePage from "../routes/home/HomePage";
import ProjectsPage from "../routes/projects/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);
