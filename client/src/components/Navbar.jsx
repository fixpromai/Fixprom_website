import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fixpromLogo from "../assets/fixprom.png";
import defaultProfilePic from "../assets/user.png";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  // ✅ Check token and fetch user data
  useEffect(() => {
    const token = localStorage.getItem("fixpromToken");
    if (token) {
      fetch("http://localhost:5000/api/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch user");
          return res.json();
        })
        .then((data) => {
          setUser(data); // Assuming your backend returns { name, email, photo }
        })
        .catch((err) => {
          console.error("Invalid token:", err);
          localStorage.removeItem("fixpromToken");
          setUser(null);
        });
    }
  }, []);

  // ✅ Logout logic
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.removeItem("fixpromToken");
      setUser(null);
      setShowLogoutModal(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={fixpromLogo}
              alt="FixProm Logo"
              style={{ width: "20px", height: "20px" }}
            />{" "}
            FixProm
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
                  <a className="nav-link" href="#features">
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

              {!user ? (
                <Link to="/signup">
                  <button className="btn btn-primary" type="button">
                    Signup
                  </button>
                </Link>
              ) : (
                <div className="position-relative">
                  <img
                    src={user.photo || defaultProfilePic}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultProfilePic;
                    }}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: "32px", height: "32px", cursor: "pointer" }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  />
                  {dropdownOpen && (
                    <div
                      className="position-absolute bg-white rounded shadow"
                      style={{
                        top: "120%",
                        right: 0,
                        zIndex: 1000,
                        minWidth: "240px",
                        padding: "1rem",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <p className="mb-1" style={{ fontWeight: "600", fontSize: "18px" }}>
                        {user.name}
                      </p>
                      <p className="mb-2" style={{ fontSize: "15px", color: "#555" }}>
                        {user.email}
                      </p>
                      <hr className="my-2" />
                      <Link to="/dashboard" className="text-decoration-none">
                        <button className="btn btn-outline-secondary btn-sm w-100 mb-2">
                          Dashboard
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-danger btn-sm w-100"
                        onClick={() => {
                          setDropdownOpen(false);
                          setShowLogoutModal(true);
                        }}
                      >
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* 🔒 Logout Modal */}
      {showLogoutModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "18px",
              padding: "32px",
              width: "400px",
              maxWidth: "90%",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h5 className="fw-bold mb-3">Are you sure you want to log out?</h5>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-danger btn-sm px-4" onClick={handleLogout}>
                Yes, Logout
              </button>
              <button
                className="btn btn-outline-secondary btn-sm px-4"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
