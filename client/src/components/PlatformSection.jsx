import React from 'react';
import './PlatformSection.css';

import chatgptlogo from '../assets/chatgpt.jpg';
import claudelogo from '../assets/claude.png';
import vercellogo from '../assets/vercel.png';
import copilotlogo from '../assets/copilot.jpeg';
import deepseeklogo from '../assets/deepsek.png';
import geminilogo from '../assets/gemini.png';
import groklogo from '../assets/grok.png';
import lovablelogo from '../assets/lovable.jpeg';
import poelogo from '../assets/poe.png';
import youlogo from '../assets/you.jpeg';

const platforms = [
  { name: 'ChatGPT', logo: chatgptlogo },
  { name: 'Claude', logo: claudelogo },
  { name: 'Vercel', logo: vercellogo },
  { name: 'Copilot', logo: copilotlogo },
  { name: 'Deepseek', logo: deepseeklogo },
  { name: 'Gemini', logo: geminilogo },
  { name: 'Grok', logo: groklogo },
  { name: 'Lovable', logo: lovablelogo },
  { name: 'Poe', logo: poelogo },
  { name: 'You', logo: youlogo },
];

export default function PlatformSection() {
  const doubledPlatforms = [...platforms, ...platforms];

  return (
    <section className="platform-section">
      <div className="section-header">
        <h2 className="section-title">
          Works with{' '}
          <span className="gradient-text">15+ AI Platforms</span>
        </h2>
        <p className="section-subtext">
          One extension, seamlessly integrated with all your favorite AI tools.
          No setup required.
        </p>
      </div>

      <div className="scroll-wrapper">
        <h3 className="section-subheading">Most Popular Platforms</h3>

        <div className="scroll-container">
          <div className="scroll-marquee">
            {doubledPlatforms.map((platform, index) => (
              <div className="platform-card" key={index}>
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="avatar"
                />
                <h2 className="platform-header">
                  <span className="highlight">{platform.name}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
