import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/navbar";
const URL_CONTACTNODE = "http://localhost:5000/contacts/";

export default function EditContact() {
  const params = useParams();
  const contactID = params.id;
  const url = URL_CONTACTNODE + contactID;
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    image: "",
  });

  const getToken = () => {
    try {
      const tokenStr = localStorage.getItem("token");
      const header = {
        Authorization: tokenStr,
      };
      return header;
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const headerData = getToken();
    axios
      .put(url, formValue, { headers: headerData })
      .then((response) => {
        if (response.status === 200) {
          alert(JSON.stringify(response.data.message));
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert("Fail to create Edit contact.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Edit contact</h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
              required
              name="name"
              value={formValue.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Number">Phone No.</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Phone no."
              required
              name="phone"
              value={formValue.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Image"
              name="image"
              required
              value={formValue.image}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
