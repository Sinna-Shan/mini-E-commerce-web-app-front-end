import React from "react";
import "./../../main.css";
import { Outlet, Link } from "react-router-dom";

export default function CrudPage(props) {
  return (
    <div className="page-container">
      <div className="product-page">
        <button className="btn-back"> 👈</button>
        <h1>
          Products &gt; <h6>{props.title}</h6>
        </h1>
        <form action="post">
          <table className="tbl-form">
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
                <input className="input input-img" type="file" />
              </td>
              <td className="tbl-form-td"></td>
              <td className="tbl-form-td"></td>
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
          </table>
        </form>
      </div>
    </div>
  );
}
