import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Product from './components/product/ProductPage';
import CrudPage from './components/add/crudPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/create",
    element: <CrudPage title={"Add new product"} btnTxt={"Add product"}/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


