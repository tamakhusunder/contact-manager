import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";

export default function Signup() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/signup", formValue)
      .then((response) => {
        if (response.status === 200) {
          alert(JSON.stringify(response.data.message));
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert("Fail to create new user.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center">SignUp Page</h3>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning"
            style={{ marginTop: "10px" }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
