import React from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Css/LabStaff.css";

function LabStaff() {

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav>

        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h2>MedCare</h2>
        </div>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Notifications</a></li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>

      </nav>

      {/* MAIN CONTAINER */}
      <div className="main-container">

        {/* SIDEBAR */}
        <div className="sidebar">

          <h2>Lab Staff</h2>

          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Test Requests</a></li>
            <li><a href="/">Sample Collection</a></li>
            <li><a href="/">Lab Processing</a></li>
            <li><a href="/">Test Reports</a></li>
            <li><a href="/">Emergency Tests</a></li>
            <li><a href="/">Equipment Status</a></li>
            <li><a href="/">Settings</a></li>
          </ul>

        </div>

        {/* DASHBOARD */}
        <div className="dashboard">

          <h1>Lab Staff Dashboard</h1>

          {/* CARDS */}
          <div className="card-container">

            <div className="card">
              <h3>Total Requests</h3>
              <p>125</p>
            </div>

            <div className="card">
              <h3>Pending Tests</h3>
              <p>18</p>
            </div>

            <div className="card">
              <h3>Completed Tests</h3>
              <p>107</p>
            </div>

            <div className="card">
              <h3>Emergency Cases</h3>
              <p>4</p>
            </div>

          </div>

          {/* TEST REQUESTS */}
          <div className="table-section">

            <h2>Today's Test Requests</h2>

            <table>

              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Test</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>P101</td>
                  <td>Arun Kumar</td>
                  <td>Blood Test</td>
                  <td>Normal</td>
                  <td>
                    <span className="status completed">
                      Collected
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>P102</td>
                  <td>Divya</td>
                  <td>Urine Test</td>
                  <td>Normal</td>
                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>P103</td>
                  <td>Ramesh</td>
                  <td>COVID Test</td>
                  <td>Urgent</td>
                  <td>
                    <span className="status urgent">
                      Urgent
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>P104</td>
                  <td>Kavya</td>
                  <td>Thyroid Test</td>
                  <td>Normal</td>
                  <td>
                    <span className="status completed">
                      Completed
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* REPORT SECTION */}
          <div className="report-section">

            <h2>Recent Lab Reports</h2>

            <p>
              Blood test reports, thyroid reports, and COVID
              screening results have been successfully uploaded
              and shared with doctors.
            </p>

          </div>

          {/* FORM SECTION */}
          <div className="form-section">

            <h2>Upload Lab Report</h2>

            <div className="form-group">
              <label>Patient ID</label>
              <input
                type="text"
                placeholder="Enter Patient ID"
              />
            </div>

            <div className="form-group">
              <label>Test Type</label>
              <select>
                <option>Blood Test</option>
                <option>Urine Test</option>
                <option>Thyroid Test</option>
                <option>COVID Test</option>
              </select>
            </div>

            <div className="form-group">
              <label>Remarks</label>
              <textarea
                rows="4"
                placeholder="Enter remarks"
              ></textarea>
            </div>

            <button className="btn">
              Upload Report
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default LabStaff;