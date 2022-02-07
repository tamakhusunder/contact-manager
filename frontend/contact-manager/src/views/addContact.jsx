import React from "react";
import Navbar from "../component/navbar";

export default function AddContact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Add contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="Name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Number">Phone No.</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Phone no."
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Image"
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
