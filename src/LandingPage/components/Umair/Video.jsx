import React, { useRef, useState } from "react";
import "./Video.css"; // Adjust the path as necessary
import DummyVideo from "../../Assets/pvc.mp4";

function Video() {
  const videoRef = useRef(null);
  const [show, setshow] = useState(true);

  return (
    <div className="video-container">
      <video
        style={{ display: show ? "none" : "block" }}
        ref={videoRef}
        autoPlay={false}
        loop
        className="background-video"
      >
        <source src={DummyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img
        style={{ display: !show ? "none" : "block" }}
        className="background-video"
        src="https://img.freepik.com/free-vector/modern-desktop-background-geometric-blue-design-vector_53876-135923.jpg"
      ></img>

      {show && (
        <div
          className="overlay-content"
          style={{ gap: 20, display: "flex", flexDirection: "column" }}
        >
          <h1 className="headx">Welcome to ToneSync AI</h1>
          <h3 className="txt">Your business Quality Assurance Partner!</h3>
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
