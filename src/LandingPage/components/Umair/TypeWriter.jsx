import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TypeWriter() {
  const [ text ] = useTypewriter({
    words: ["Multilingual Transcriptions", "AI Driven Analysis",'Automated Quality Assurance','Progress Reports'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 45,
    delaySpeed:1800
  });

  return (
    <>
      <h1 style={{ marginTop: "10px" }}>
      <span style={{ fontWeight: "bold", color: "white" }}>{'What ToneSync Does?'}</span>
<br></br>
        <span style={{ fontWeight: "bold", color: "rgb(124, 27, 208)" }}>{'AI Driven QA analysis...'}</span>
        <span style={{ color: "white" }}><Cursor cursorStyle="|" /></span>
      </h1>
    </>
  );
}

export default TypeWriter;
