import React, { useState, useEffect } from "react";
import "./../../main.css";
import { Link } from "react-router-dom";
import DeletePopup from "../delete/deletePopup";
import Row from "../row/row";

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [del, setDel] = useState(false);
  const [product, setProduct] = useState({});
  

  useEffect(function () {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/products");
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handelDelete = function () {
    console.log(del);
    setDel(!del);
  };


  const upperCase = function (value) {
    return value.toUpperCase();
  };

  return (
    <div className="page-container">
      <div className="page">
        {props.heading === "favorites products" && (
          <button className="btn-back">
            <Link to={"/"} className="nav-link">
              👈
            </Link>
          </button>
        )}
        <h1 className="prod-header">{upperCase(props.heading)}</h1>
        <div className="first-raw">
          <div className="search-field-container" style={{backgroundColor:"transparent"}}>
            <button className="btn search-btn">
              <Link to={`/search`} className="nav-link">
                search
              </Link>
            </button>
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
          {products.map((prod) => (
            <Row
              key={prod._id}
              del={del}
              product={prod}
              newProduct={product}
              handelDelete={handelDelete}
              setProduct={setProduct}
            />
          ))}
        </table>
      </div>
      <DeletePopup handelDelete={handelDelete} del={del} product={product} />
    </div>
  );
}
