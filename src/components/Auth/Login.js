"use client"
import { useState } from 'react';
import "./auth.css"

export default function Login() {
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);

  const handleForgotPasswordClick = () => {
    setForgotPasswordVisible(!forgotPasswordVisible);
  };

  const handleBackClick = () => {
    setForgotPasswordVisible(false);
  };

  return (
    <div className="auth container">
      <div className="row justify-content-center">
        {!forgotPasswordVisible && (
          <div class="box">
            <div class="form">
              <h2>Login</h2>
              <div class="inputBox">
                <input type="text" required="required" />
                <span>Username</span>
                <i></i>
              </div>
              <div class="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
                <i></i>
              </div>
              <div class="links">
                <a href="#" onClick={handleForgotPasswordClick}>Forgot password?</a>
              </div>
              <button className="sub-btn">Login</button>
            </div>
          </div>
        )}
        {forgotPasswordVisible && (
          <div class="box">
            <div class="form">
              <h2>Forgot password</h2>
              <div class="inputBox">
                <input type="text" required="required" />
                <span>Email</span>
                <i></i>
              </div>
              <div className="row justify-content-between">
                <button className="sub-btn">Forgot</button>
                <button className="sub-btn Back-btn" onClick={handleBackClick}>Back</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
