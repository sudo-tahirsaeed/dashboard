import React, { useState, useEffect, useRef } from "react";
import "./NewDetailCard.css";
import TypeWriter from "../../components/Umair/TypeWriter";
function NewDetailCard() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return (
    <div className="new-detail-card-container">
      <div className="component-section">
        <TypeWriter />
      </div>
      <div className="New-text-section">
        <h3
          style={{
            marginRight: 70,
            marginLeft: 70,
            textAlign: "center",
            lineHeight: 1.5,
            color: "white",
          }}
        >
          ToneSync is an advanced AI-driven solution for automated Quality
          Assurance on customer-business audio calls. It eliminates delays in QA
          for large call volumes, providing fast and accurate analysis, and
          assigns scores to CSRs to ensure high-quality customer satisfaction
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 25 }}>
        <h1
          style={{
            color: "white",
            fontFamily: "Montserrat",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center ",
            fontWeight: "500",
            fontSize: "30px",
            fontFamily: "Montserrat",
          }}
        >
          Key Features:
        </h1>
      </div>
      <div
        className={`cardx ${isVisible ? "show" : ""}`}
        ref={cardRef}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 80,
          visibility: 0,
        }}
      >
        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              Multilingual Transcriptions
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>Accurate transcriptions in multiple languages. </li>
              <li>Including Urdu and English.</li>
              <li>Supports 50+ Languages.</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              In-depth Analysis
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>
                Automated AI based analysis on every call made from your
                business.{" "}
              </li>
              <li>Considers more than 10 metrices to evaluate each call.</li>
              <li>Customization option for evaluation metrices.</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              Automated Scoring
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>Assigns score to representative as automated QA. </li>

              <li>Customization available for custom evaluation metrices.</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              Automated Summerization
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>
                Generates summary of call covering all of the key points.{" "}
              </li>

              <li>
                Highlights the topic/issue which was discussed during the call.
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              Seamless Integrations
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>Could be easily integrated with existing systems/CMS.</li>

              <li>On premises deployments or SaaS, both options available. </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              Customization Avaialble
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>
                Customiztion for evaluation metrices / addition of any feature
                for specific usecase.
              </li>

              <li>24/7 Support </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              Security
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>
                End to end security is guranteed for all kind of sensative data.
              </li>
              <li>Option to deploy on your own premises. </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 25,
                marginTop: "10px",
              }}
            >
              Accuracy
            </h2>

            <ul
              style={{
                listStyle: "outside",
                margin: 10,
                color: "white",
                lineHeight: 2,
                fontSize: 20,
                marginLeft: "40px",
              }}
            >
              <li>
                ToneSync AI analysis are more than 80% accurate under desireable
                conditions.
              </li>
              <li>Accuracy is guranteed. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDetailCard;
