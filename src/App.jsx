import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/admin/dashboard";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";

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
      ],
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
          path: "/admin",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
