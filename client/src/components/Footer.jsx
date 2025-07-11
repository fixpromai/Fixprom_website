import React from 'react';
import './Footer.css';
import logo from '../assets/fixprom.png';
import { Link } from 'react-router-dom';// Adjust the path if needed

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Info */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="FixProm" className="logo-footer" />
                            <span className="footer-title">FixProm</span>
                        </div>
                        <p className="footer-description">
                            Polish your AI prompts for better results. The Chrome extension that
                            transforms your AI interactions across 15+ platforms.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="footer-heading">Product</h3>
                        <ul className="footer-list">
                            <li>
  <a href="#features" className="footer-text" style={{ textDecoration: 'none', color: 'inherit' }}>
    Features
  </a>
</li>

                            <li>
                                <button
                                    className="download-btn"
                                    onClick={() => window.open('https://chromewebstore.google.com/detail/fineaoekjmkdgnmeenfjdlkbnhlidmme?utm_source=item-share-cb', '_blank')}
                                >
                                    Download
                                </button>
                            </li>

                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="footer-heading">Legal</h3>
                        <ul className="footer-list space-y-2">
                            <li>
                                <Link to="/privacy-policy" className="footer-text">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions" className="footer-text">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="/refund-policy" className="footer-text">Refund Policy</Link>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="footer-bottom">
                    <span>&copy; <strong>Nirbhavi Tech Innovations</strong></span>
                </div>
            </div>
        </footer>
    );
}
