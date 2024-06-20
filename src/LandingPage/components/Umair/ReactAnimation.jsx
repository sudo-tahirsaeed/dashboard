import React from "react";
import Lottie, { LottieRefCurrentProp } from "lottie-react";
import animationData from "../../Assets/Animation.json";
import { useRef } from "react";

function ReactAnimation() {
  const phoneRef = useRef<LottieRefCurrentProp>(null);

  return (
    <div style={{ width: "80%", height: "80%" }}>
      <Lottie
        onComplete={() => {
          phoneRef.current.goToAndPlay(5, true);
        }}
        lottieRef={phoneRef}
        loop={true}
        animationData={animationData}
      />
    </div>
  );
}

export default ReactAnimation;
