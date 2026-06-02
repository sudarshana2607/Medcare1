import React, { useState } from "react";
import "../Assets/Css/Admin.css";

function Admin() {
  //const [activePage, setActivePage] = useState("dashboard");
  const [activePage, setActivePage] = useState("home");

  const logout = () => {
    window.location.href = "/";
  };

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="logo">
          <h2>MedCare</h2>
        </div>

        <ul>
  <li>
    <button onClick={() => setActivePage("home")}>
      Home
    </button>
  </li>

  <li>
    <button onClick={() => setActivePage("profile")}>
      Profile
    </button>
  </li>

  <li>
    <button onClick={() => setActivePage("notifications")}>
      Notifications
    </button>
  </li>

  <li>
    <button onClick={logout} className="logout-btn">
      Logout
    </button>
  </li>
</ul>
      </nav>

      {/* Main Container */}
      <div className="main-container">

        {/* Sidebar */}
        <div className="sidebar">
          <h2>Admin Panel</h2>

          <ul>
            <li><button onClick={() => setActivePage("dashboard")}>Dashboard</button></li>
            <li><button onClick={() => setActivePage("doctors")}>Manage Doctors</button></li>
            <li><button onClick={() => setActivePage("staff")}>Manage Staff</button></li>
            <li><button onClick={() => setActivePage("patients")}>Manage Patients</button></li>
            <li><button onClick={() => setActivePage("appointments")}>Appointments</button></li>
            <li><button onClick={() => setActivePage("billing")}>Billing</button></li>
            <li><button onClick={() => setActivePage("departments")}>Departments</button></li>
            <li><button onClick={() => setActivePage("reports")}>Reports</button></li>
            <li><button onClick={() => setActivePage("settings")}>Settings</button></li>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard">
            {activePage === "home" && (
  <div className="table-section">
    <h2>Welcome Admin</h2>

    <p>
      Welcome to MedCare Hospital Management System.
      Use the sidebar to manage doctors, patients,
      appointments, billing and reports.
    </p>

    <br />

    <h3>Quick Statistics</h3>

    <ul>
      <li>Total Doctors : 25</li>
      <li>Total Patients : 140</li>
      <li>Total Staff : 45</li>
      <li>Total Revenue : ₹4,50,000</li>
    </ul>
  </div>
)}

{activePage === "profile" && (
  <div className="table-section">

    <h2>Admin Profile</h2>

    <p><strong>Name:</strong> Admin</p>
    <p><strong>Email:</strong> admin@medcare.com</p>
    <p><strong>Phone:</strong> +91 9876543210</p>
    <p><strong>Role:</strong> Hospital Administrator</p>

  </div>
)}

{activePage === "notifications" && (
  <div className="table-section">

    <h2>Notifications</h2>

    <ul>
      <li>New patient registered.</li>
      <li>Appointment booked for tomorrow.</li>
      <li>Monthly revenue report generated.</li>
      <li>Doctor leave request pending approval.</li>
      <li>Pharmacy stock running low.</li>
    </ul>

  </div>
)}

          {activePage === "dashboard" && (
            <>
              <div className="card-container">

                <div className="card">
                  <h3>Total Doctors</h3>
                  <p>25 Doctors Available</p>
                </div>

                <div className="card">
                  <h3>Total Patients</h3>
                  <p>140 Patients Registered</p>
                </div>

                <div className="card">
                  <h3>Total Staff</h3>
                  <p>45 Staff Members</p>
                </div>

                <div className="card">
                  <h3>Total Revenue</h3>
                  <p>₹4,50,000 This Month</p>
                </div>

              </div>

              <div className="table-section">
                <h2>Recent Activities</h2>

                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Activity</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Dr. Kavya</td>
                      <td>Updated Patient Report</td>
                      <td>Completed</td>
                    </tr>

                    <tr>
                      <td>Reception Staff</td>
                      <td>Booked Appointment</td>
                      <td>Completed</td>
                    </tr>

                    <tr>
                      <td>Admin</td>
                      <td>Added New Doctor</td>
                      <td>Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activePage === "doctors" && (
            <div className="table-section">
              <h2>Manage Doctors</h2>

              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>D001</td>
                    <td>Dr. Kavya</td>
                    <td>Cardiology</td>
                    <td>Active</td>
                  </tr>

                  <tr>
                    <td>D002</td>
                    <td>Dr. Arun</td>
                    <td>Neurology</td>
                    <td>Active</td>
                  </tr>

                  <tr>
                    <td>D003</td>
                    <td>Dr. Priya</td>
                    <td>Orthopedics</td>
                    <td>On Leave</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activePage === "staff" && (
            <div className="table-section">
              <h2>Manage Staff</h2>
              <p>Staff details here...</p>
            </div>
          )}

          {activePage === "patients" && (
            <div className="table-section">
              <h2>Manage Patients</h2>
              <p>Patient details here...</p>
            </div>
          )}

          {activePage === "appointments" && (
            <div className="table-section">
              <h2>Appointments</h2>
              <p>Appointment details here...</p>
            </div>
          )}

          {activePage === "billing" && (
            <div className="table-section">
              <h2>Billing</h2>
              <p>Billing details here...</p>
            </div>
          )}

          {activePage === "departments" && (
            <div className="table-section">
              <h2>Departments</h2>
              <p>Dermatology</p>
              <p>ENT</p>
              <p>Cardiology</p>
              <p>Ontology</p>
              <p>Gynocology</p>
              <p>Neurology</p>
            </div>
          )}

          {activePage === "reports" && (
            <div className="table-section">
              <h2>Reports</h2>
              <ul>
                <li>Monthly Revenue Report</li>
                <li>Doctor Performance Report</li>
                <li>Patient Admission Report</li>
                <li>Appointment Report</li>
              </ul>
            </div>
          )}

          {activePage === "settings" && (
            <div className="table-section">
              <h2>Settings</h2>
              <p>Hospital Name: MedCare</p>
              <p>Email: admin@medcare.com</p>
              <p>Phone: +91 9876543210</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Admin;