import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminLayout from "./components/admin/AdminLayout";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import Register from "./pages/admin/Register";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import ForeignTrade from "./pages/services/ForeignTrade";
import FreightTransportation from "./pages/services/FreightTransportation";
import Mining from "./pages/services/Mining";
import RailLogistic from "./pages/services/RailLogistic";
import NewsScreen from "./pages/NewsScreen";
import News from "./pages/News";
import ProjectScreen from "./pages/ProjectScreen";

import "swiper/css/pagination";
import "swiper/css";
import AddNews from "./pages/admin/AddNews";
import AddProject from "./pages/admin/AddProject";
import EditProject from "./pages/admin/EditProject";
import EditNews from "./pages/admin/EditNews";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/our-team",
          element: <OurTeam />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/service/mining",
          element: <Mining />,
        },
        {
          path: "/service/rail-logistic",
          element: <RailLogistic />,
        },
        {
          path: "/service/freight-transportation",
          element: <FreightTransportation />,
        },
        {
          path: "/service/foreign-trade",
          element: <ForeignTrade />,
        },
        {
          path: "/project/:id",
          element: <ProjectScreen />,
        },
      ],
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/news/:id",
      element: <NewsScreen />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "add-admin",
          element: <Register />,
        },
        {
          path: "add-news",
          element: <AddNews />,
        },
        {
          path: "add-project",
          element: <AddProject />,
        },
        {
          path: "projects",
          element: <EditProject />,
        },
        {
          path: "news",
          element: <EditNews />,
        },
      ],
    },
    {
      path: "/admin/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
