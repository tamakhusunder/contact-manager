import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";
const URL_CONTACTNODE = "http://localhost:5000/contacts/";

export default function AddContact() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    uploaded_image: "",
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
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleFileChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const headerData = getToken();
    var formData = new FormData()
    for (let i in contactInfo){
      console.log(i,contactInfo[i])
      formData.append(i,contactInfo[i]);
    }
   
    axios
      .post(URL_CONTACTNODE, formData, { headers: headerData })
      .then((response) => {
        if (response.status === 200) {
          alert(JSON.stringify(response.data.message));
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert("Fail to create new contact.");
      });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Add contact</h2>
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
              value={contactInfo.name}
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
              value={contactInfo.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              placeholder="Image"
              name="uploaded_image"
              required
              accept="image/*"
              onChange={handleFileChange}
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
