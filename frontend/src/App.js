import { Fragment } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import ManagePatients from "./pages/ManagePatients";
import PatientScheduling from "./pages/PatientScheduling";

const PrivateLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
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
  return (
    <div className="h-100 w-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
