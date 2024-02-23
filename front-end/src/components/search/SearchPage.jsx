import React, { useState, useEffect } from "react";
import "./../../main.css";
import { Link } from "react-router-dom";
import DeletePopup from "../delete/deletePopup";
import Row from "../row/row";

export default function Search(props) {
  const [products, setProducts] = useState([]);
  const [del, setDel] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [product, setProduct] = useState({});
  const [input, setInput] = useState("");

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

  const handelSearch = function () {
    if (!input || input === "") setProducts(products);
    const search = products.filter((file) => file.name === input);
    setInput("");
    setProducts(search);
  };
  const handelDelete = function () {
    console.log(del);
    setDel(!del);
  };

  const handelFavorite = function () {
    setFavorite(!favorite);
  };

  const upperCase = function (value) {
    return value.toUpperCase();
  };

  return (
    <div className="page-container">
      <div className="page">
          <button className="btn-back">
            <Link to={"/"} className="nav-link">
              👈
            </Link>
          </button>
        
        <h1 className="prod-header">{upperCase(props.heading)}</h1>
        <div className="first-raw">
          <div className="search-field-container">
            <input
              type="text"
              className="inp-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="search by product name..."
            />
            <button className="btn search-btn" onClick={handelSearch}>
              search
            </button>
          </div>
          <div className="new-and-fav">
            <button className="btn new-btn">
              <Link to={`/create`} className="nav-link">
                New Product
              </Link>
            </button>
          </div>
        </div>
        {products.map((prod) => (
          <div className="elementOuterContainer">
            <div className="elementContainer">
              <h4 className="search-sku">{prod.SKU}</h4>
              <h3 className="search-name">{prod.name}</h3>
              <h6 className="search-desc">{prod.description}</h6>
            </div>
            <div>
              <img src="assets/arrow.svg" alt=""  className="arrow"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
