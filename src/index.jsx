import ReactDom from "react-dom/client";
import HeroSection from "./Components/Hero-Section/Hero-Section.jsx";
import Collections from "./Components/Collections/Collections.jsx";
import Navibar from "./Components/Navibar/Navibar.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Products from "./Components/Products/Products.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Review from "./Components/Review/Review.jsx";
import { Children } from "react";
import Cart from "./Components/Cart/Cart.jsx";
import Payment from "./Components/Payment/Payment.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";

const AppLayout = () => {
  return (
    <>
      <Navibar />
      <Outlet />
      {}
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <Collections />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
