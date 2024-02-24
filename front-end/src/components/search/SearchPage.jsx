import React, { useState, useEffect } from "react";
import "./../../main.css";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
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
    if (!input || input === "") return setSearchResults(products);
    const search = products.filter((file) => {
      const name = file.name.toLowerCase();
      const searchTerm = input.toLowerCase();
      return searchTerm && name.startsWith(searchTerm);
    });
    console.log(search);
    setInput("");
    setSearchResults(search);
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
        {searchResults.length !== 0 ? searchResults.map((prod) => (
          <div className="elementOuterContainer" key={prod._id}>
            <div className="elementContainer">
              <h4 className="search-sku">{prod.SKU}</h4>
              <h3 className="search-name">{prod.name}</h3>
              <h6 className="search-desc">{prod.description}</h6>
            </div>
            <div>
              <img src="assets/arrow.svg" alt="" className="arrow" />
            </div>
          </div>
        )): <div style={{
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height:'300px',
        }}><h2>NO RESULTS FOUND</h2></div>}
      </div>
    </div>
  );
}
