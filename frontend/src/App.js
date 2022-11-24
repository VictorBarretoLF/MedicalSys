import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import ManagePatients from "./pages/ManagePatients";
import PatientScheduling from "./pages/PatientScheduling";

const PrivateLayout = () => {
  return (
    <div className="h-100 w-100 d-flex flex-column">
      <Navbar />
      <section className="h-100">
        <Outlet />
      </section>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "app",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <PatientScheduling />,
      },
      {
        path: "management",
        element: <ManagePatients />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
