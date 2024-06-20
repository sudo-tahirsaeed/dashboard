import React from "react";
import "./CenterSpace.css";
import Image from "../../images/MainImage.jpg";
function CenterSpace() {
  return (
    <div className="center-space" style={{marginTop:0}}>
      <div className="center-text-container">
        <h1 className="center-text">
        From Unheard to Understood


        </h1>
        <h2 className="Text2">
        ToneSync Delivers Precise Analysis from Every Conversation

        </h2>
        <img
          src={Image}
          alt="Description of the image"
         
          style={{width:'40%',height:120}}
        />
        <h2 className="Text2" style={{marginBottom:30}}>
        Your Business's Quality Assurance, Enhanced by AI!
        <hr style={{ border: '0', height: '3px', background: 'rgb(124, 27, 208)', margin: '20px 0' }} />





</h2>
      </div>
    </div>
  );
}

export default CenterSpace;
