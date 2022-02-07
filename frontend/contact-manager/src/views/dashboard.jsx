import React from "react";
import Navbar from "../component/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Contact List</h2>
        <div>
          <button className="btn btn-success addcontact-right">
            + Add Contact
          </button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-dark">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button
                  className="btn btn-warning"
                  style={{ marginRight: "2%" }}
                >
                  Edit
                </button>
                <button className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
