import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";

export default function Login() {
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
      .post("http://localhost:5000/signin", formValue)
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data;
          alert(JSON.stringify(response.data.message));
          localStorage.setItem("token", token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert("Fail login.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center">Login Page</h3>
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
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
