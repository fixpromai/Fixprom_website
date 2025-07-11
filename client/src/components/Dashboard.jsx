import React from 'react';

export default function Profile(props) {
    const isPro = props.subscribed;
    const totalPrompts = isPro ? Infinity : 20;
    const usedPrompts = props.promptCount || 0;
    const progressPercent = isPro ? 100 : Math.min((usedPrompts / totalPrompts) * 100, 100);

    // Dummy prompt history
    const promptHistory = [
        { id: 1, date: "2025-07-01", prompt: "Write a cold email for sales", result: "Polished cold email" },
        { id: 2, date: "2025-07-03", prompt: "Explain quantum computing to a child", result: "Simplified explanation" },
        { id: 3, date: "2025-07-06", prompt: "Improve SEO blog intro", result: "Optimized introduction" },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Profile Card */}
                <div className="col-md-4">
                    <div className="card text-center">
                        <img
                            src={props.image}
                            className="card-img-top img-thumbnail rounded-circle mx-auto mt-3"
                            alt="Profile"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text"><b>Email:</b> {props.email}</p>
                            <p className="card-text"><b>Plan:</b> {isPro ? "Pro" : "Free"}</p>
                            {!isPro && (
                                <p className="card-text">
                                    <b>Upgrade:</b>{" "}
                                    <a href='https://fixpromai.com/plans' target="_blank" rel="noopener noreferrer">
                                        View Plans
                                    </a>
                                </p>
                            )}
                            <button
                                className="btn btn-outline-danger btn-sm mt-3"
                                onClick={() => {
                                    localStorage.removeItem("user");
                                    window.location.reload();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="col-md-8">
                    <h4 className="mb-4">Overview</h4>
                    <dl className="row">
                        <dt className="col-sm-3">Email:</dt>
                        <dd className="col-sm-9">{props.email}</dd>

                        <dt className="col-sm-3">Plan:</dt>
                        <dd className="col-sm-9">
                            {isPro ? "Pro (Unlimited Polishes)" : "Free (20 Polishes)"}
                        </dd>

                        <dt className="col-sm-3">Linked accounts:</dt>
                        <dd className="col-sm-9">Google</dd>

                        <dt className="col-sm-3">Preferred language:</dt>
                        <dd className="col-sm-9">English</dd>

                        <dt className="col-sm-3">Polishes:</dt>
                        <dd className="col-sm-9">
                            {isPro ? "Unlimited" : `${usedPrompts} / 20`}
                            {!isPro && (
                                <div className="progress mt-2" style={{ height: "20px" }}>
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{ width: `${progressPercent}%` }}
                                        aria-valuenow={usedPrompts}
                                        aria-valuemin="0"
                                        aria-valuemax="20"
                                    >
                                        {`${progressPercent.toFixed(0)}%`}
                                    </div>
                                </div>
                            )}
                        </dd>
                    </dl>

                    {/* Prompt History Table */}
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
                                {promptHistory.map((entry) => (
                                    <tr key={entry.id}>
                                        <td>{entry.prompt}</td>
                                        <td>{entry.result}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
