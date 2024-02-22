import React from "react";
import "./../../main.css";
import { Outlet, Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="page-container">
      <div className="product-page">
        <h1>Products</h1>
        <div className="first-raw">
          <div className="search-field-container">
            <input type="text" className="inp-field" />
            <button className="btn search-btn">search</button>
          </div>
          <div className="new-and-fav">
            <button className="btn new-btn">
              <Link to={`/create`} className="nav-link">New Product</Link>
            </button>

            <button className="btn fav-btn">
              <img src="assets/starred.svg" alt="favorite" />
            </button>
          </div>
        </div>
        <table className="tbl-prod">
          <tr className="tbl-prod-tr">
            <th className="tbl-prod-th">SKU</th>
            <th className="tbl-prod-th">Image</th>
            <th className="tbl-prod-th">Product</th>
            <th className="tbl-prod-th">Quantity</th>
            <th className="tbl-prod-th"></th>
          </tr>
          <tr className="tbl-prod-tr">
            <td>#CA25</td>
            <td>
              <img
                src="assets/product-img-1.png"
                alt="pro-img"
                className="prod-img"
              />
            </td>
            <td>product-name</td>
            <td>25.00</td>
            <td>
              <div className="action-btn-container">
                <Link to="/edit">
                  <img src="assets/edit-icon.svg" alt="edit" />
                </Link>
                <Link to="">
                  <img src="assets/delete-icon.svg" alt="delete" />
                </Link>
                <Link to="">
                  <img src="assets/star.svg" alt="favorite" />
                </Link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
