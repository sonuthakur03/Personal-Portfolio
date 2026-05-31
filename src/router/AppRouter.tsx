// AppRouter.tsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import SkillsPage from "../pages/SkillsPage";

// The AppRouter component defines the routing configuration for the application using React Router. It sets up a root route with a layout and nested routes for different pages, including error handling for undefined routes.
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default AppRouter;
