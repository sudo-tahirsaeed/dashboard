import React, { useRef, useState } from "react";
import "./Video.css"; // Adjust the path as necessary
import DummyVideo from "../../Assets/pvc.mp4";

function Video() {
  const videoRef = useRef(null);
  const [show, setshow] = useState(true);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay={false} loop className="background-video">
        <source src={DummyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {show && (
        <div
          className="overlay-content"
          style={{ gap: 20, display: "flex", flexDirection: "column" }}
        >
          <h1>Welcome to ToneSync AI</h1>
          <h3>Your business Quality Assurance Partner!</h3>
          <button
            onClick={() => {
              setshow(false);
              videoRef.current.controls = true;
              videoRef.current.play();
            }}
          >
            Launch Demo
          </button>
        </div>
      )}
    </div>
  );
}

export default Video;
