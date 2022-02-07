import React from "react";
import logoImg from "../assets/images/contact.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="nav-title">
        <img src={logoImg} width="30" height="30" alt="imagephoto" style={{marginRight:"10px"}}/>
        Contact Manager
      </Link>
    </nav>
  );
}
