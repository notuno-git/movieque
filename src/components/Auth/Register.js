import React, { useState } from 'react';
import "./auth.css"

export default function Register() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (formData.fullName.trim().length < 3) {
      errors.fullName = "Full Name must be at least 3 characters long";
    }
    if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      // If there are errors, set them and prevent form submission
      setErrors(errors);
      return;
    }

    // If all validation passed, you can submit the form data to your backend or perform other actions
    console.log("Form submitted:", formData);
  };

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <div className="auth container">
      <div className="row justify-content-center">

        <div class="box reg-box">
          <form class="form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div class="inputBox">
              <input 
               type="text"
               name="fullName"
               value={formData.fullName}
               onChange={handleChange}
               required
              />
              <span>Full Name</span>
              {errors.fullName && <div className="error">{errors.fullName}</div>}
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
            <button className="sub-btn">Register</button>
          </form>
        </div>

      </div>
    </div>
  );
}
