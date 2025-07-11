import React, { useState } from "react";
import heroImage from "../assets/fixprom.png"; // Fix the image path if needed

export default function Home() {
  const [prompt, setPrompt] = useState("write a blog post about AI");
  const [isPolished, setIsPolished] = useState(false);

  const handlePolish = () => {
    const polished =
      "Write a detailed and engaging blog post about the current state and future of Artificial Intelligence, highlighting key applications and ethical considerations.";
    setPrompt(polished);
    setIsPolished(true);
  };

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

        {/* Left Column (Fake Browser with Heading) */}
        <div className="col-10 col-sm-8 col-lg-6">
          <h2 className="mb-3 fw-semibold text-center" style={{ fontSize: "1.5rem" }}>
            Click here for Magic
          </h2>

          <div
            style={{
              border: "3px solid #f1f1f1",
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              fontFamily: "Arial",
            }}
          >
            {/* Fake browser bar */}
            <div
              style={{
                padding: 10,
                background: "#f1f1f1",
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                overflow: "hidden",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "15%",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span style={{ height: 12, width: 12, backgroundColor: "#ED594A", borderRadius: "50%", display: "inline-block" }}></span>
                <span style={{ height: 12, width: 12, backgroundColor: "#FDD800", borderRadius: "50%", display: "inline-block" }}></span>
                <span style={{ height: 12, width: 12, backgroundColor: "#5AC05A", borderRadius: "50%", display: "inline-block" }}></span>
              </div>
              <div style={{ width: "75%", display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  value="http://www.fixpromai.com"
                  readOnly
                  style={{
                    width: "100%",
                    borderRadius: 3,
                    border: "none",
                    backgroundColor: "white",
                    marginTop: -8,
                    height: 25,
                    color: "#666",
                    padding: 5,
                  }}
                />
              </div>
              <div style={{ width: "10%", display: "flex", justifyContent: "flex-end" }}>
                <div>
                  <span style={{ width: 17, height: 3, backgroundColor: "#aaa", margin: "3px 0", display: "block" }}></span>
                  <span style={{ width: 17, height: 3, backgroundColor: "#aaa", margin: "3px 0", display: "block" }}></span>
                  <span style={{ width: 17, height: 3, backgroundColor: "#aaa", margin: "3px 0", display: "block" }}></span>
                </div>
              </div>
            </div>

            {/* Prompt box with Polish button */}
            <div
              style={{
                padding: 10,
                backgroundColor: "#ffffff",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            >
              <label htmlFor="floatingTextarea2" className="form-label mt-2 fw-bold">
                {isPolished ? "Polished Prompt" : "Prompt Input"}
              </label>
              <div className="form-floating d-flex gap-2 align-items-start">
                
                <textarea
                  className="form-control"
                  placeholder="Prompt will appear here"
                  id="floatingTextarea2"
                  style={{ height: "100px", resize: "none", backgroundColor: "#ffffff" }}
                  value={prompt}
                  readOnly
                ></textarea>

                {/* Updated Polish Button */}
                <button
                  onClick={handlePolish}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    marginTop: 5,
                  }}
                >
                  <img src={heroImage} alt="Polish" style={{ width: 20, height: 20 }} />
                </button>
              </div>

              
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Polish Your AI Prompts Instantly
          </h1>
          <p className="lead">
            Transform basic prompts into professional, effective requests with
            one click. Works seamlessly with ChatGPT, Claude, Gemini, and 15+ AI
            platforms.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={() =>
                window.open(
                  "https://chromewebstore.google.com/detail/fineaoekjmkdgnmeenfjdlkbnhlidmme?utm_source=item-share-cb",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Download Extension
            </button>

            <a
              href="https://www.youtube.com/watch?v=cnpCi2FUxQM"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary btn-lg px-4 d-flex align-items-center gap-2 watch-demo-btn"
                style={{ fontWeight: 600 }}
              >
                <svg
                  className="bi bi-play-circle-fill"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.271 5.055a.5.5 0 0 0-.771.422v5.046a.5.5 0 0 0 .77.423l4.184-2.523a.5.5 0 0 0 0-.846L6.27 5.055z" />
                </svg>
                Watch Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
