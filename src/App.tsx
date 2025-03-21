import "./styles/global.scss"
import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import Devices from "./pages/devices/Devices"
import Region from "./pages/region/Region"
import Energy from "./pages/energy/Energy"
import Dispatch from "./pages/dispatch/Dispatch"
import Tracking from "./pages/tracking/Tracking"
import User from "./pages/user/User"
import Product from "./pages/product/Product"
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/Footer"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();


function App() {
  const Layout = () => {
    return (
      <div className="main">

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Navbar />
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
            <Footer />
          </div>
        </div>


      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }, {
          path: "/users",
          element: <Users />
        }, {
          path: "/Devices",
          element: <Devices />
        }, {
          path: "/users/:id",
          element: <User />
        }, {
          path: "/products/:id",
          element: <Product />
        }, {
          path: "/region",
          element: <Region />

        }, {
          path: "/energy",
          element: <Energy />
        }, {
          path: "/dispatch",
          element: <Dispatch />
        }, {
          path: "/tracking",
          element: <Tracking />
        },
      ]
    },
  ])


  return <RouterProvider router={router} />;

}

export default App
