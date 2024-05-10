import React, { useState } from 'react';
import "./auth.css"
import { useRouter } from "next/navigation";
// import CommonToast from '../common/CommonToast';

export default function Register({ setActiveTab }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState('');
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error message when the input value changes
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setErrors("Must provided all the cridential")
    }

    // Validation
    // const errors = {};
    // if (formData.username.trim().length < 3) {
    //   errors.username = "Full Name must be at least 3 characters long";
    // }
    // if (!isValidEmail(formData.email)) {
    //   errors.email = "Invalid email address";
    // }
    // if (formData.password.length < 8) {
    //   errors.password = "Password must be at least 8 characters long";
    // }
    // if (formData.password !== formData.confirmPassword) {
    //   errors.confirmPassword = "Passwords do not match";
    // }
    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // }

    try {
      setPending(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setPending(false);
        const form = e.target;
        form.reset();
        // CommonToast("success", "Registered successfully");
        console.log("User registered");
        router.push(setActiveTab('login'));
      } else {
        const errorData = await res.json();
        setErrors(errorData.message)
        console.log("Something went wrong:", errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      console.log("Something went wrong:", error);
    }
  };

  // Email validation function
  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // if (sessionStatus === "loading") {
  //   return <h1>Loading...</h1>;
  // }


  return (
    <div className="auth container">
      <div className="row justify-content-center">

        <div className="box reg-box">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="inputBox">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <span>Full Name</span>
              {errors.username && <div className="error">{errors.username}</div>}
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span>Email</span>
              {errors.email && <div className="error">{errors.email}</div>}
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <span>Phone</span>
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
              {errors.password && <div className="error">{errors.password}</div>}
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span>Confirm Password</span>
              {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
              <i></i>
            </div>
            <button className="sub-btn" disabled={pending ? true : false}>
              {pending ? "Registering" : "Register"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
