import React, { useState, useRef, useEffect } from "react";
import "./../../main.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function CrudPage(props) {
  const [imageUrls, setImageUrls] = useState([]);
  const [files, setFiles] = useState([]);
  const [formDataValue, setFormDataValue] = useState({
    SKU: "",
    name: "",
    quantity: "",
    description: "",
    images: [],
    isFavorite: false,
  });
  const fileInputRef = useRef(null);
  const location = useLocation();
  const id = location.search.slice(1).toString();

  useEffect(function () {
    if (!id) return;

    const getById = async () => {
      try {
        const product = await axios.get(
          `http://localhost:8000/api/v1/products/${id}`
        );
        const res = {
          SKU: product.data.data.SKU,
          name: product.data.data.name,
          quantity: product.data.data.quantity,
          description: product.data.data.description,
          images: [...product.data.data.images],
          isFavorite: product.data.data.isFavorite,
        };
        setFormDataValue(res);
      } catch (err) {
        console.log(err);
        alert(`💥💥${err.message}`);
      }
    };

    getById();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataValue({
      ...formDataValue,
      [name]: value,
    });
  };

  const clearFields = () => {
    setFormDataValue({
      SKU: "",
      name: "",
      quantity: "",
      description: "",
      images: [],
    });
    fileInputRef.current.value = "";
    setImageUrls([]);
  };

  const submit = async (url, data) => {
    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      clearFields();
    } catch (err) {
      console.log(err);
      alert(`💥💥 ${err.message}`);
    }
  };

  const handleUpdate = async function (url, data) {
    try {
      const res = await axios.patch(url, data);
      console.log(res);
      clearFields();
    } catch (err) {
      console.log(err);
      alert(`💥💥 ${err}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = { ...formDataValue, images: files };
    const data = new FormData();

    files.forEach((file) => data.append("files", file));
    data.append("SKU", obj.SKU);
    data.append("name", obj.name);
    data.append("quantity", obj.quantity);
    data.append("description", obj.description);
    data.append("isFavorite", obj.isFavorite);

    if (!id) {
      submit(`http://localhost:8000/api/v1/products`, data);
    }

    if (id) {
      handleUpdate(`http://localhost:8000/api/v1/products/${id}`, data);
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;

    const fileArr = Array.from(files);
    setFiles(fileArr);

    fileArr.forEach((file) => {
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
        <form action="post" onSubmit={handleSubmit}>
          <table className="tbl-form">
            <tbody>
              <tr className="tbl-form-tr">
                <td className="tbl-form-td">
                  <label className="lbl" htmlFor="sku">
                    SKU :
                  </label>
                </td>
                <td className="tbl-form-td">
                  <input
                    className="input input-sku"
                    type="text"
                    name="SKU"
                    value={formDataValue.SKU}
                    onChange={handleChange}
                  />
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
                  <input
                    className="input input-name"
                    type="text"
                    name="name"
                    value={formDataValue.name}
                    onChange={handleChange}
                  />
                </td>
                <td className="tbl-form-td">
                  <label className="lbl" htmlFor="qty">
                    Quantity :
                  </label>
                </td>
                <td className="tbl-form-td">
                  <input
                    className="input input-qty"
                    type="number"
                    name="quantity"
                    value={formDataValue.quantity}
                    onChange={handleChange}
                  />
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
                    value={formDataValue.description}
                    onChange={handleChange}
                    name="description"
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
                    ref={fileInputRef}
                  />
                </td>
                <td className="tbl-form-td" colSpan={2}>
                  {imageUrls.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`product ${index}`}
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
