import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/PharmacyStaff.css";
function PharmacyDashboard() {

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <>
      {/* Navbar */}

      <nav>

        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h2>MedCare</h2>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Notifications</a></li>

          <li>
            <button
              onClick={handleLogout}>
              Logout
            </button>
          </li>

        </ul>

      </nav>

      {/* Main Container */}

      <div className="main-container">

        {/* Sidebar */}

        <div className="sidebar">

          <h2>Pharmacy Staff</h2>

          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Prescription Requests</a></li>
            <li><a href="/">Dispense Medicines</a></li>
            <li><a href="/">Inventory</a></li>
            <li><a href="/">Low Stock Alerts</a></li>
            <li><a href="/">Suppliers</a></li>
            <li><a href="/">Billing Support</a></li>
            <li><a href="/">Settings</a></li>
          </ul>

        </div>

        {/* Dashboard */}

        <div className="dashboard">

          <h1>Pharmacy Dashboard</h1>

          {/* Cards */}

          <div className="card-container">

            <div className="card">
              <h3>Total Prescriptions</h3>
              <p>245</p>
            </div>

            <div className="card">
              <h3>Medicines Dispensed</h3>
              <p>198</p>
            </div>

            <div className="card">
              <h3>Available Medicines</h3>
              <p>520</p>
            </div>

            <div className="card">
              <h3>Low Stock Items</h3>
              <p>12</p>
            </div>

          </div>

          {/* Table */}

          <div className="table-section">

            <h2>Prescription Requests</h2>

            <table>

              <thead>
                <tr>
                  <th>Prescription ID</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Medicine</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>PR101</td>
                  <td>Arun Kumar</td>
                  <td>Dr. Kavya</td>
                  <td>Paracetamol</td>
                  <td>
                    <span className="status completed">
                      Dispensed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>PR102</td>
                  <td>Divya</td>
                  <td>Dr. Joseph</td>
                  <td>Amoxicillin</td>
                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>PR103</td>
                  <td>Kiran</td>
                  <td>Dr. Shreya</td>
                  <td>Insulin</td>
                  <td>
                    <span className="status urgent">
                      Urgent
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* Inventory */}

          <div className="report-section">

            <h2>Medicine Inventory Summary</h2>

            <p>
              Current inventory contains antibiotics,
              painkillers, vitamins, insulin and emergency
              medicines. Stock levels are updated automatically
              after dispensing.
            </p>

          </div>

          {/* Form */}

          <div className="form-section">

            <h2>Issue Medicine</h2>

            <div className="form-group">
              <label>Patient ID</label>
              <input
                type="text"
                placeholder="Enter Patient ID"
              />
            </div>

            <div className="form-group">
              <label>Medicine Name</label>
              <input
                type="text"
                placeholder="Enter Medicine Name"
              />
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                placeholder="Enter Quantity"
              />
            </div>

            <div className="form-group">
              <label>Remarks</label>
              <textarea rows="4"></textarea>
            </div>

            <button className="btn">
              Issue Medicine
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default PharmacyDashboard;