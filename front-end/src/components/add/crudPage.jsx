import React, { useState } from "react";
import "./../../main.css";
import { Link } from "react-router-dom";

export default function CrudPage(props) {
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const imageUrl = reader.result;
        setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
      };
    });
  };

  const upperCase = function (value) {
    return value.toUpperCase();
  };

  return (
    <div className="page-container">
      <div className="page">
        <button className="btn-back">
          {" "}
          <Link to={"/"} className="nav-link">
            👈
          </Link>
        </button>
        <div className="heading-container">
          <h1>{`${upperCase("products")} > `}</h1>
          <h4>{`  ${upperCase(props.title)}`}</h4>
        </div>
        <form action="post">
          <table className="tbl-form">
          <tbody>
            <tr className="tbl-form-tr">
              <td className="tbl-form-td">
                <label className="lbl" htmlFor="sku">
                  SKU :
                </label>
              </td>
              <td className="tbl-form-td">
                <input className="input input-sku" type="text" />
              </td>
              <td className="tbl-form-td"></td>
              <td className="tbl-form-td"></td>
            </tr>
            <tr className="tbl-form-tr">
              <td className="tbl-form-td">
                <label className="lbl" htmlFor="name">
                  Name :
                </label>
              </td>
              <td className="tbl-form-td">
                <input className="input input-name" type="text" />
              </td>
              <td className="tbl-form-td">
                <label className="lbl" htmlFor="qty">
                  Quantity :
                </label>
              </td>
              <td className="tbl-form-td">
                <input className="input input-qty" type="text" />
              </td>
            </tr>
            <tr className="tbl-form-tr">
              <td className="tbl-form-td">
                <label className="lbl" htmlFor="qty">
                  Description :
                </label>
              </td>
              <td className="tbl-form-td" colSpan={3}>
                <textarea
                  className="input-desc"
                  rows="5"
                  cols="50"
                  placeholder="a small description about the product"
                ></textarea>
              </td>
            </tr>
            <tr className="tbl-form-tr">
              <td className="tbl-form-td">
                <label className="lbl" htmlFor="qty">
                  Images :
                </label>
              </td>
              <td className="tbl-form-td">
                <input
                  className="input input-img"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
              </td>
              <td className="tbl-form-td" colSpan={2}>
                {imageUrls.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    className="prod-img"
                  />
                ))}
              </td>
            </tr>
            <tr className="tbl-form-tr">
              <td className="tbl-form-td"></td>
              <td className="tbl-form-td"></td>
              <td className="tbl-form-td"></td>
              <td className="tbl-form-td">
                <input
                  type="submit"
                  value={props.btnTxt}
                  className="btn add-btn"
                />
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
