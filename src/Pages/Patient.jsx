import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/Patient.css";

function Patient() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid d-flex justify-content-between align-items-center">

    <div className="logo">
      <h2>MedCare</h2>
    </div>

    <ul className="navbar-nav d-flex flex-row gap-3">
      <li className="nav-item">
        <Link className="nav-link" to="/patient">Home</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="#">Profile</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="#">Notification</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/">Logout</Link>
      </li>
    </ul>

  </div>
</nav>

      <div className="main-container">

        <div className="sidebar">

          <h3>Patient Panel</h3>

          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Medical History</a></li>
            <li><a href="#">Appointment</a></li>
            <li><a href="#">Medical Report</a></li>
            <li><a href="#">Prescription</a></li>
            <li><a href="#">Billing</a></li>
          </ul>

        </div>

        <div className="dashboard">

          <div className="card-container">
            <div className="card">
              <h2>Upcoming Appointments</h2>
              <p>2</p>
            </div>

            <div className="card">
              <h2>Medical Reports</h2>
              <p>5</p>
            </div>

            <div className="card">
              <h2>Prescriptions</h2>
              <p>3</p>
            </div>

            <div className="card">
              <h2>Doctors Consulted</h2>
              <p>3</p>
            </div>

          </div>

          <div className="table-section">

            <table className="table table-striped table-hover">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>Dr. Kavya</td>
                  <td>Cardiology</td>
                  <td>Completed</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Dr. Shreya</td>
                  <td>Neurology</td>
                  <td>Upcoming</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Dr. Joseph</td>
                  <td>Orthopedics</td>
                  <td>Pending</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="profile">

            <h2>Patient Details</h2>

            <p>Name: Revathi</p>
            <p>Age: 32</p>
            <p>Blood Group: O+</p>
            <p>Phone: +91 9876543210</p>
            <p>Email: revathi@gmail.com</p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Patient;