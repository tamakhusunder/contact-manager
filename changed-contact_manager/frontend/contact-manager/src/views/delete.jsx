import React from "react";
import Navbar from "../component/navbar";
import { useNavigate } from "react-router-dom";

export default function DeleteContact() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container">
        Are sure want to delete it?
        <p>
          <button
            className="btn btn-outline-success"
            style={{ marginRight: "2%" }}
          >
            Yes
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </p>
      </div>
    </>
  );
}
