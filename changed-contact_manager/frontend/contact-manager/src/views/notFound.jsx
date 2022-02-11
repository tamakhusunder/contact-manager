import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 className="text-center">404 not Found !!!</h1>
      <div className="text-center">
        Goto <Link to="/">homePage</Link>
      </div>
    </>
  );
}
