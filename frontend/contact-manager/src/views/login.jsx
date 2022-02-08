import React from "react";
import Navbar from "../component/navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center">Login Page</h3>
        <form>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              name="inputEmail"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="inputPassword"
              className="form-control"
              placeholder="Password"
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
