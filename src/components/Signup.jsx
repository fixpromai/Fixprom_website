import React from 'react';
import './Signup.css'; // ✅ external CSS
import logo from '../assets/fixprom.png';

export default function Signup() {
  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button
          className="signup-close"
          onClick={() => (window.location.href = '/')}
        >
          &times;
        </button>

        <div className="signup-header">
          <img src={logo} className="signup-logo" alt="FixProm logo" />
          <h2 className="signup-title">FixProm</h2>
        </div>

        <button
          className="google-button"
          onClick={() => window.location.href = '/auth/google'}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            className="google-icon"
            alt="Google"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
