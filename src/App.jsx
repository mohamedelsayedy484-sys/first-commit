import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { AuthProvider } from "./Context/AuthContext";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";

import Products from "./Pages/Products";
import Home from "./Pages/Home";
import PageError from "./Pages/PageError";
import RegisterForm from "./Pages/RegisterForm";
import ProductDetails from "./Pages/ProductDetails";
import Api from "./Data/Api";
import { ThemeProvider } from "./Context/ThemeContext";

// Main Layout
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "register", element: <RegisterForm /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "products", element: <Products /> },
          { path: "products/:id", element: <ProductDetails /> },
        ],
      },

      { path: "api-products", element: <Api /> },
      { path: "*", element: <PageError /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;