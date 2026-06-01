import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Assets/Css/Signin.css";

function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "admin",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("signinData");

    if (savedData) {
      const data = JSON.parse(savedData);

      setFormData({
        fullname: data.fullname || "",
        email: data.email || "",
        password: data.password || "",
        confirmPassword: data.password || "",
        role: data.role || "admin",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    const namePattern = /^[A-Za-z ]{3,30}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

    if (!formData.fullname) {
      newErrors.fullname = "Full Name is required";
    } else if (!namePattern.test(formData.fullname)) {
      newErrors.fullname =
        "Only letters allowed (3-30 characters)";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "Password must contain 1 uppercase, 1 number and minimum 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Confirm Password is required";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const userData = {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

      localStorage.setItem(
        "signinData",
        JSON.stringify(userData)
      );

      setSuccessMessage(
        "Signin Successful... Redirecting to Login"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div className="container">

      <div className="logo-image">
        <h1>MedCare Signin</h1>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
          alt="logo"
        />
      </div>

      <div className="input">
        <label>Select Role</label>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="labstaff">Lab Staff</option>
          <option value="pharmacystaff">Pharmacy Staff</option>
          <option value="receptionstaff">Reception Staff</option>
          <option value="billingstaff">Billing Staff</option>
          <option value="nurse">Nurse</option>
        </select>
      </div>

      <div className="login-form">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
          />
          <div className="error">{errors.fullname}</div>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="error">
            {errors.confirmPassword}
          </div>

          <input type="submit" value="Signin" />

        </form>

      </div>

      <div className="signup-link">
        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="success">
        {successMessage}
      </div>

    </div>
  );
}

export default Signin;