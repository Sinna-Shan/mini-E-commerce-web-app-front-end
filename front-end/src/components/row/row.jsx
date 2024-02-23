import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Row(props) {
  const [render, setRender] = useState(props.newProduct.isFavorite);
  const setProductId = function () {
    props.setProduct(props.product);
    props.handelDelete();
  };

  const handleFavorite = function () {
    // const favProduct = {...props.product,isFavorite: !props.product.isFavorite};
    props.product.isFavorite = !props.product.isFavorite;
    props.setProduct(props.product);
    setRender(props.newProduct.isFavorite);
  };

  return (
    <>
      <tbody>
        <tr className="tbl-prod-tr">
          <td>{props.product.SKU}</td>
          <td>
            <img
              src={`http://localhost:8000/${props.product.images[0]}`}
              alt="pro-img"
              className="prod-img"
            />
          </td>
          <td>{props.product.name}</td>
          <td>{props.product.quantity}</td>
          <td>
            <div className="action-btn-container">
              <Link
                to={{
                  pathname: "/edit",
                  search: props.product._id
                }}
              >
                <img src="assets/edit-icon.svg" alt="edit" />
              </Link>
              <Link to="" value={props.del} onClick={() => setProductId()}>
                <img src="assets/delete-icon.svg" alt="delete" />
              </Link>
              <Link to="">
                <img
                  src={`${
                    props.newProduct.isFavorite
                      ? "assets/star"
                      : "assets/starred"
                  }.svg`}
                  alt="favorite"
                  onClick={() => {
                    handleFavorite();
                  }}
                />
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}
