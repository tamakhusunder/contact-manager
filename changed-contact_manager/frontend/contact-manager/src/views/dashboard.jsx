import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL_CONTACTNODE = "http://localhost:5000/contacts/";

export default function Dashboard() {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getToken = () => {
    try {
      const tokenStr = localStorage.getItem("token");
      const header = {
        Authorization: tokenStr,
      };
      return header;
    } catch (err) {
      console.log("err", err);
    }
  };

  const getData = async () => {
    try {
      const headerData = getToken();
      const results = await axios.get(URL_CONTACTNODE, { headers: headerData });
      setContactData(results.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClickDelete = (id) => {
    const url = URL_CONTACTNODE + id;
    const headerData = getToken();
    axios
      .delete(url, { headers: headerData })
      .then((response) => {
        const del = contactData.filter((contact) => id !== contact._id);
        setContactData(del);
        alert(JSON.stringify(response.data.message));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Dashboard | Contact List</h2>
        <div>
          <button
            className="btn btn-success addcontact-right"
            onClick={() => navigate("/add")}
          >
            + Add Contact
          </button>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((el, index) => (
              <tr key={el._id} className="table-dark">
                <td>{index + 1}</td>
                <td><img src={`http://localhost:5000/${el.image}`} width="40px" height="40px" alt="pic" style={{borderRadius: "50%", marginRight: "5%"}}/>{el.name}</td>
                <td>{el.phone}</td>
                <td>
                  <button
                    onClick={() => navigate(`/edit/${el._id}`)}
                    className="btn btn-outline-warning"
                    style={{ marginRight: "2%" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleClickDelete(el._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
