import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DeletePopup(props) {
  const handelCancel = function () {
    props.handelDelete(!props.del);
  };

  const handelDelete = async function () {
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/products/${props.product._id}`
      );
      props.handelDelete(!props.del);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className={`popup-background ${props.del ? "" : "hidden"}`}>
      <div className="modal">
        <img src="assets/alert.svg" alt="" />
        <h2 className="popup-h2">ARE YOU SURE?</h2>
        <h3 className="popup-h3">
          You will not be able to undo this action if you proceed!
        </h3>
        <div className="popup-btn-container">
          <button
            className="popup-btn popup-btn-cancel"
            onClick={() => handelCancel()}
          >
            Cancel
          </button>
          <button
            className="popup-btn popup-btn-delete"
            onClick={() => handelDelete()}
          >
            <Link className="nav-link" to={"/"}>
              Delete
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
