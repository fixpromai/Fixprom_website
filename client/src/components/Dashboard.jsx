import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfile from '../assets/user.png';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [promptHistory, setPromptHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndPrompts = async () => {
      const token = localStorage.getItem("fixpromToken");
      if (!token) return;

      try {
        // 1. Fetch user
        const userRes = await fetch("http://localhost:5000/api/user/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await userRes.json();
        setUserData(userData);

        // 2. Fetch prompt history
        const promptRes = await fetch("http://localhost:5000/api/prompts/all", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const promptData = await promptRes.json();
        setPromptHistory(promptData.prompts || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchUserAndPrompts();
  }, []);

  if (!userData) {
    return <div className="container mt-4">Loading profile...</div>;
  }

  const usedPrompts = userData.polishCount || 0;
  const totalPages = Math.ceil(promptHistory.length / itemsPerPage);
  const paginatedPrompts = promptHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Profile Card */}
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src={imageError ? defaultProfile : userData.photo}
              onError={() => setImageError(true)}
              className="card-img-top img-thumbnail rounded-circle mx-auto mt-3"
              alt="Profile"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{userData.name}</h5>
              <p className="card-text"><b>Email:</b> {userData.email}</p>
            </div>
          </div>
                    <h4 className="mb-4">Overview</h4>
          <dl className="row">
            <dt className="col-sm-3">Email:</dt>
            <dd className="col-sm-9">{userData.email}</dd>

            <dt className="col-sm-3">Linked accounts:</dt>
            <dd className="col-sm-9">Google</dd>

            <dt className="col-sm-3">Preferred language:</dt>
            <dd className="col-sm-9">English</dd>

            <dt className="col-sm-3">Polishes Used Today:</dt>
            <dd className="col-sm-9">{usedPrompts}</dd>
          </dl>
        </div>

        {/* Details Section */}
        <div className="col-md-8">


          <h5 className="mt-5 mb-3">Prompt History</h5>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Original Prompt</th>
                  <th>Polished Output</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPrompts.map((entry) => (
                  <tr key={entry._id}>
                    <td>{entry.rawPrompt}</td>
                    <td>{entry.polishedPrompt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages ? prev + 1 : prev
                  )
                }
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}

          <div className="text-end mt-4">
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
