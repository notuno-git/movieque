"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import "./auth.css"

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error message when the input value changes
    setError({
      ...error,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Must provided all the cridential")
    }
    console.log(formData);
    try {
      setPending(true);
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false
      })
      if (res.error) {
        setError("invalid credential")
        setPending(false);
        return;
      }
      router.push("/");
    } catch (error) {
      setPending(false);
      console.log("Something went wrong:", error);
    }
  };















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
          <div className="box">
            <form className="form" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="inputBox">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span>Email</span>
                {error.email && <div className="error">{error.email}</div>}
                <i></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span>Password</span>
                {error.password && <div className="error">{error.password}</div>}
                <i></i>
              </div>
              <button className="sub-btn" disabled={pending ? true : false}>
                {pending ? "Signing" : "Sign in"}
              </button>
            </form>
          </div>
        )}
        {forgotPasswordVisible && (
          <div className="box">
            <div className="form">
              <h2>Forgot password</h2>
              <div className="inputBox">
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
