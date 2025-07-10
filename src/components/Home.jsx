import React from "react";
import heroImage from "../assets/fixprom.png"; // Make sure the path is correct

export default function Home() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <div
            style={{
              border: "3px solid #f1f1f1",
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              fontFamily: "Arial",
            }}
          >
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
                <span
                  style={{
                    marginTop: 4,
                    height: 12,
                    width: 12,
                    backgroundColor: "#ED594A",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  style={{
                    marginTop: 4,
                    height: 12,
                    width: 12,
                    backgroundColor: "#FDD800",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  style={{
                    marginTop: 4,
                    height: 12,
                    width: 12,
                    backgroundColor: "#5AC05A",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
              </div>
              <div
                style={{ width: "75%", display: "flex", alignItems: "center" }}
              >
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
              <div
                style={{
                  width: "10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <div style={{ float: "right" }}>
                  <span
                    style={{
                      width: 17,
                      height: 3,
                      backgroundColor: "#aaa",
                      margin: "3px 0",
                      display: "block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: 17,
                      height: 3,
                      backgroundColor: "#aaa",
                      margin: "3px 0",
                      display: "block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: 17,
                      height: 3,
                      backgroundColor: "#aaa",
                      margin: "3px 0",
                      display: "block",
                    }}
                  ></span>
                </div>
              </div>
            </div>
            <div style={{ padding: 10 }}>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "200px", resize: "none" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Enter your prompt here</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Polish Your AI Prompts Instantly
          </h1>
          <p className="lead">
            Transform basic prompts into professional, effective requests with
            one click. Works seamlessly with ChatGPT, Claude, Gemini, and 15+ AI
            platforms
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
  type="button"
  className="btn btn-primary btn-lg px-4 me-md-2"
  onClick={() => {
    window.open(
      'https://chromewebstore.google.com/detail/fineaoekjmkdgnmeenfjdlkbnhlidmme?utm_source=item-share-cb',
      '_blank',
      'noopener,noreferrer'
    );
  }}
>
  Download Extension
</button>

            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
