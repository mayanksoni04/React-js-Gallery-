import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {menu ? (
            <span onClick={handleMenu} className="navbar-toggler-icon"></span>
          ) : (
            <span onClick={handleMenu} className="navbar-toggler-icon"></span>
          )}
          {menu ? (
            <div
              style={{
                position: "absolute",

                backgroundColor: "transparent",
                color: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <li className="nav-item active">
                <Link className="nav-link" to="/Like">
                  <i
                    style={{ color: "green" }}
                    className="fa fa-regular fa-heart"
                  ></i>
                  <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/Dislike" className="nav-link">
                  <i style={{ color: "red" }} className="fa fa-thumbs-down"></i>
                  <span className="sr-only"></span>
                </Link>
              </li>
            </div>
          ) : null}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/Like">
                <i
                  style={{ color: "green" }}
                  className="fa fa-regular fa-heart"
                ></i>
                <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/Dislike" className="nav-link">
                <i style={{ color: "red" }} className="fa fa-thumbs-down"></i>
                <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
