import React, { useState} from "react";
import { Link } from "react-router-dom";

export default function Row(props) {
  const [favorite, setFavorite] = useState(false);

  //set the current product in the parent state
  const setProductId = function () {
    props.setProduct(props.product);
    props.handelDelete();
  };

  // handling star button click
  const handleFavorite = function () {
      setFavorite(!favorite);
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
                  search: props.product._id,//passing the product id through search parameter
                }}
              >
                <img src="assets/edit-icon.svg" alt="edit" />
              </Link>
              <Link to="" value={props.del} onClick={() => setProductId()}>
                <img src="assets/delete-icon.svg" alt="delete" />
              </Link>
              <Link to="">
                <img
                  src={`${!favorite ? "assets/star" : "assets/starred"}.svg`}
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
