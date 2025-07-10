import React from 'react';
import './CallToAction.css'; // Optional: for custom styles

export default function CallToAction() {
  return (
    <section className="calltoaction-section">
      <div className="container">
        <h2 className="cta-heading">
          Ready to Polish Your Prompts?
        </h2>

        <p className="cta-subtext">
          Join thousands of users who are getting better AI results with FixProm.
          Install now and start polishing your prompts instantly.
        </p>

        <div className="cta-buttons">
          <button
  id="installMainBtn"
  className="cta-download-btn download-extension-btn"
  onClick={() => {
    window.open(
      "https://chromewebstore.google.com/detail/fineaoekjmkdgnmeenfjdlkbnhlidmme?utm_source=item-share-cb",
      "_blank"
    );
  }}
>
  Download Extension
</button>

          <div className="cta-rating">
            ⭐ 4.7/5 rating • Free to start
          </div>
        </div>

        <div className="cta-guide">
          <h3 className="cta-guide-heading">Quick Installation Guide:</h3>
          <div className="cta-steps">
            <div className="step">
              <span className="step-number">1</span>
              Click "Download Extension" above
            </div>
            <div className="step">
              <span className="step-number">2</span>
              Click "Add to Chrome" in the Web Store
            </div>
            <div className="step">
              <span className="step-number">3</span>
              Visit any AI platform and start polishing!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
