import React from "react";
import { useNavigate } from "react-router-dom";

function BillingStaff() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h2>MedCare</h2>
        </div>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Notifications</a></li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>

      {/* MAIN */}
      <div className="main-container">

        {/* SIDEBAR */}
        <div className="sidebar">

          <h2>Billing Staff</h2>

          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Generate Bills</a></li>
            <li><a href="#">Patient Payments</a></li>
            <li><a href="#">Insurance Claims</a></li>
            <li><a href="#">Pending Payments</a></li>
            <li><a href="#">Revenue Reports</a></li>
            <li><a href="#">Transactions</a></li>
            <li><a href="#">Settings</a></li>
          </ul>

        </div>

        {/* DASHBOARD */}
        <div className="dashboard">

          <h1>Billing Dashboard</h1>

          <div className="card-container">

            <div className="card">
              <h3>Total Bills Today</h3>
              <p>85</p>
            </div>

            <div className="card">
              <h3>Payments Received</h3>
              <p>₹1,25,000</p>
            </div>

            <div className="card">
              <h3>Pending Payments</h3>
              <p>18</p>
            </div>

            <div className="card">
              <h3>Insurance Claims</h3>
              <p>12</p>
            </div>

          </div>

          {/* BILL TABLE */}
          <div className="table-section">

            <h2>Recent Billing Records</h2>

            <table>

              <thead>
                <tr>
                  <th>Bill ID</th>
                  <th>Patient</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>B101</td>
                  <td>Arun Kumar</td>
                  <td>₹4,500</td>
                  <td>UPI</td>
                  <td>
                    <span className="status paid">Paid</span>
                  </td>
                </tr>

                <tr>
                  <td>B102</td>
                  <td>Divya</td>
                  <td>₹2,300</td>
                  <td>Cash</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td>B103</td>
                  <td>Kiran</td>
                  <td>₹8,900</td>
                  <td>Insurance</td>
                  <td>
                    <span className="status overdue">Processing</span>
                  </td>
                </tr>

                <tr>
                  <td>B104</td>
                  <td>Revathi</td>
                  <td>₹1,500</td>
                  <td>Card</td>
                  <td>
                    <span className="status paid">Paid</span>
                  </td>
                </tr>
              </tbody>

            </table>

          </div>

          {/* BILL GENERATION */}
          <div className="form-section">

            <h2>Generate Patient Bill</h2>

            <div className="form-group">
              <label>Patient ID</label>
              <input type="text" placeholder="Enter Patient ID" />
            </div>

            <div className="form-group">
              <label>Patient Name</label>
              <input type="text" placeholder="Enter Patient Name" />
            </div>

            <div className="form-group">
              <label>Department</label>
              <select>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>General Medicine</option>
                <option>Pediatrics</option>
                <option>ENT</option>
                <option>Gynecology</option>
                <option>Urology</option>
                <option>Dermatology</option>
                <option>Psychiatry</option>
                <option>Radiology</option>
                <option>Oncology</option>
              </select>
            </div>

            <div className="form-group">
              <label>Total Amount</label>
              <input type="number" placeholder="Enter Amount" />
            </div>

            <div className="form-group">
              <label>Remarks</label>
              <textarea
                rows="4"
                placeholder="Enter Remarks"
              ></textarea>
            </div>

            <button className="btn">
              Generate Bill
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default BillingStaff;