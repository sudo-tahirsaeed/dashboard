import React from "react";
import "./MyFooter.css";

function MyFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>For queries</h5>
            <p>Feel Free To contact us for Further Queries and information.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone: +92 3316670557</li>
              <li>Email: official@ayzenntechnologies.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Company Info</h5>
            <ul className="list-unstyled">
              <li>Email: official@ayzenntechnologies.com</li>
              <li>E11/2 Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white text-center py-2">
        <p className="mb-0">
          &copy; 2024 A Product of Ayzenn Technologies. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default MyFooter;
