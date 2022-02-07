import React from "react";
import Navbar from "../component/navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="container wrapper-top">
        <h3 className="text-center">SignUp Page</h3>
        <form>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
              id="exampleInputPassword1"
              placeholder="Password"
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
