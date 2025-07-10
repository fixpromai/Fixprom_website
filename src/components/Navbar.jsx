import React from "react";
import { Link } from "react-router-dom";
import fixpromLogo from "../assets/Fixprom.png"; // Adjust the path as necessary

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={fixpromLogo} alt="FixProm Logo" style={{ width: "20px", height: "20px" }} />
          {" "}FixProm
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex align-items-center gap-2">
            <ul className="navbar-nav mb-2 mb-lg-0 flex-row gap-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://chromewebstore.google.com/detail/fineaoekjmkdgnmeenfjdlkbnhlidmme?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </li>
            </ul>
            <Link to="/signup">
              <button className="btn btn-primary" type="button">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
