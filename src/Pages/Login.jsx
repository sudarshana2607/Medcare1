import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Css/Login.css";
import { Link } from "react-router-dom";
function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("loginData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    const usernamePattern = /^[A-Za-z ]{3,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (!usernamePattern.test(formData.username)) {
      newErrors.username = "Only letters allowed (3-20 characters)";
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      localStorage.setItem(
        "loginData",
        JSON.stringify(formData)
      );

      setSuccessMessage("Login Successful... Redirecting");

      setTimeout(() => {

        switch (formData.role) {
          case "admin":
            navigate("/admin");
            break;

          case "doctor":
            navigate("/doctor");
            break;

          case "patient":
            navigate("/patient");
            break;

          case "labstaff":
            navigate("/labstaff");
            break;

          case "nurse":
            navigate("/nurse");
            break;

          case "receptionstaff":
            navigate("/receptionstaff");
            break;

          case "billingstaff":
            navigate("/billingstaff");
            break;

          case "pharmacystaff":
            navigate("/pharmacystaff");
            break;

          default:
            navigate("/");
        }

      }, 1000);
    }
  };

  return (
    <div className="container">

      <div className="logo-image">
        <h1>MedCare Login</h1>

        <img
          src=""
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
          <option value="nurse">Nurse</option>
          <option value="receptionstaff">Reception Staff</option>
          <option value="billingstaff">Billing Staff</option>
          <option value="pharmacystaff">Pharmacy Staff</option>
        </select>
      </div>

      <div className="login-form">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error">{errors.username}</div>

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
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>

          <input type="submit" value="Login" />

        </form>

      </div>

      <div className="sample">

        <label>
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember me
        </label>

        <a href="/">Forgot Password?</a>

      </div>

      <div className="signup-link">
        <p>
    Don't have an account? <Link to="/signin">Signup</Link>
  </p>
      </div>

      <div className="success">
        {successMessage}
      </div>

    </div>
  );
}

export default Login;