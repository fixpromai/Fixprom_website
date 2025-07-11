import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import logo from '../assets/fixprom.png';
import useGoogleSignIn from '../components/GoogleLoginButton';

export default function Signup() {
  const login = useGoogleSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = localStorage.getItem("fixpromUser");
    if (existingUser) {
      navigate("/"); // already signed in
    }
  }, []);

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

        <button className="google-button" onClick={login}>
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
