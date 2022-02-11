import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
      <div className="text-center home-container">
        <h1 className="home-heading">Welcome to Contact Manager</h1>
        <p className="home-context">
          A contact manager is a software program that enables users to easily
          store and find contact information, such as names and telephone
          numbers. They are contact-centric databases that provide a fully
          integrated approach to tracking all information and communication
          activities linked to contacts.
        </p>
        <p className="home-btn lead">
          <button
            className="btn btn-lg btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="btn btn-lg btn-warning"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </>
  );
}
