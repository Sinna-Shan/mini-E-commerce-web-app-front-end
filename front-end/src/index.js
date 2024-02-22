import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Product from "./components/product/ProductPage";
import CrudPage from "./components/add/crudPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product heading={"products"} />,
  },
  {
    path: "/create",
    element: <CrudPage title={"Add new product"} btnTxt={"Add product"} />,
  },
  {
    path: "/edit",
    element: <CrudPage title={"Edit product"} btnTxt={"save changes"} />,
  },
  {
    path: "/favorites",
    element: <Product heading={"favorites products"} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
