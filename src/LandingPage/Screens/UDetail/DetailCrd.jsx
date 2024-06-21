import React from "react";
import "./DetailCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactAnimation from "../../components/Umair/ReactAnimation";
import {
  faHippo,
  faWalkieTalkie,
  faBuildingColumns,
  faGlobe,
  faHotel,
  faMoneyBillTransfer,
  faHandshakeAngle,
  faHeadset,
  faBullhorn,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function DetailCard() {
  return (
    <>
      {" "}
      <div className="detail-card">
        <div className="image-section">
          <ReactAnimation />
        </div>
        <div className="text-section">
          <h2>
            Who Can Benefit From <br />{" "}
            <span style={{ color: "rgb(124, 27, 208)" }}>ToneSync</span>?
          </h2>
          <div>
            <p>
              <FontAwesomeIcon icon={faWalkieTalkie} /> Telecom industries
            </p>
            <p>
              <FontAwesomeIcon icon={faBuildingColumns} /> Banking Sector
            </p>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> Government Agencies
            </p>
            <p>
              <FontAwesomeIcon icon={faHotel} /> Hoteling & Traveling Agencies
            </p>
            <p>
              <FontAwesomeIcon icon={faHandshakeAngle} /> Customer Support
              Centers
            </p>
            <p>
              <FontAwesomeIcon icon={faMoneyBillTransfer} /> Sales and
              Departments
            </p>
            <p>
              <FontAwesomeIcon icon={faHeadset} /> E support Agencies
            </p>
          </div>
        </div>
      </div>
      <div className="detail-card">
        <div className="image-section">
          <ReactAnimation />
        </div>
        <div className="text-section">
          <h2>
            Our Pricing <br />{" "}
            <span style={{ color: "rgb(124, 27, 208)" }}>: : : : : : : :</span>
          </h2>
          <div>
            <p>
              <FontAwesomeIcon icon={faBullhorn} /> Pricing varies from business
              to business.
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Feel free to contact us for
              detailed Pricing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
