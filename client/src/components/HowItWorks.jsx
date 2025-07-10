import React from 'react';
import './HowItWorks.css';
import demoVideo from '../assets/website.mp4';

export default function HowItWorks() {
  return (
    <section className="how-it-works-centered">
      <h2 className="how-heading">
        How <span className="highlight">FixProm</span> Works
      </h2>
      <div className="video-wrapper">
        <video
          className="demo-video"
          src={demoVideo}
          autoPlay
          muted
          loop
          playsInline
          onContextMenu={(e) => e.preventDefault()} // optional: disable right-click download
        />
      </div>
    </section>
  );
}
