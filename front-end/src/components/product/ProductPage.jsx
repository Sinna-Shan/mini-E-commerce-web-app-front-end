import React, { useState } from "react";
import "./../../main.css";
import { Link } from "react-router-dom";
import DeletePopup from "../delete/deletePopup";

export default function Product(props) {
  const [del, setDel] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handelDelete = function () {
    setDel(!del);
  };

  const handelFavorite = function () {
    console.log(favorite);
    setFavorite(!favorite);
  };

  const upperCase = function (value) {
    return value.toUpperCase();
  };

  return (
    <div className="page-container">
      <div className="page">
        {props.heading==='favorites products'&& <button className="btn-back">
          <Link to={"/"} className="nav-link">
            👈
          </Link>
        </button>}
        <h1 className="prod-header">{upperCase(props.heading)}</h1>
        <div className="first-raw">
          <div className="search-field-container">
            <input type="text" className="inp-field" />
            <button className="btn search-btn">search</button>
          </div>
          <div className="new-and-fav">
            <button className="btn new-btn">
              <Link to={`/create`} className="nav-link">
                New Product
              </Link>
            </button>

            <button className="btn fav-btn">
              <Link to={"/favorites"}>
                <img src="assets/starred.svg" alt="favorite" />
              </Link>
            </button>
          </div>
        </div>
        <table className="tbl-prod">
          <thead>
            <tr className="tbl-prod-tr">
              <th className="tbl-prod-th">SKU</th>
              <th className="tbl-prod-th">Image</th>
              <th className="tbl-prod-th">Product</th>
              <th className="tbl-prod-th">Quantity</th>
              <th className="tbl-prod-th"></th>
            </tr>
          </thead>
          <tbody>
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
                  <Link to="" value={del} onClick={() => handelDelete()}>
                    <img src="assets/delete-icon.svg" alt="delete" />
                  </Link>
                  <Link to="">
                    <img
                      src={`${favorite ? "assets/star" : "assets/starred"}.svg`}
                      alt="favorite"
                      onClick={() => handelFavorite()}
                    />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <DeletePopup show={setDel} state={del} />
    </div>
  );
}
