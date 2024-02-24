import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Row(props) {
  const [favorite, setFavorite] = useState(props.product.isFavorite);

  //set the current product in the parent state
  const setProductId = function () {
    props.setProduct(props.product);
    props.handelDelete();
  };

  // handling star button click
  const handleFavorite = async function () {
    try {

      // find the index of of the current element in the parent state
      const index = props.products.findIndex(
        (p) => p._id === props.product._id
      );
      // change the is favorite state in parent state
      props.products[index].isFavorite = !props.products[index].isFavorite;

      //update data base
      await axios.patch(
        `http://localhost:8000/api/v1/products/${props.product._id}`,
        { isFavorite: props.product.isFavorite }
      );

      setFavorite(props.product.isFavorite);
    } catch (err) {
      console.log(err);
    }
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
                  search: props.product._id, //passing the product id through search parameter
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

