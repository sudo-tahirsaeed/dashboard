import "./Main.css";
import CenterSpace from "../UMiddle/CenterSpace";
import DetailCard from "../UDetail/DetailCrd";
import NewDetailCard from "../NewCard/NewDetailCard";
import MyFooter from "../UFooter/MyFooter";
import ContactForm from "../../components/Umair/Form";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Video from "../../components/Umair/Video";

function Main() {
  const [text] = useTypewriter({
    words: [
      "AI Driven Analysis",
      "Automated Quality Assurance",
      "Progress Reports",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 45,
    delaySpeed: 1500,
  });
  return (
    <>
      {/* Video Section */}
      <div className="video-section">
        <Video />
      </div>

      {/* Header */}
      <div style={{ backgroundColor: "black", margin: 0 }}>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: 5,
            fontWeight: "bold",
          }}
        >
          Welcome to ToneSync AI
        </h2>

        <h1 style={{ textAlign: "center", padding: 10, margin: 0 }}>
          {" "}
          <span style={{ fontWeight: "bold", color: "rgb(124, 27, 208)" }}>
            {text}
          </span>
          <span style={{ color: "white" }}>
            <Cursor cursorStyle="|" />
          </span>
        </h1>
      </div>

      {/* CenterSpace */}
      <div>
        <CenterSpace />
      </div>
      {/* DetailCard */}
      <div>
        <NewDetailCard />
      </div>
      {/* NewDetailCard */}
      <div>
        <DetailCard />
      </div>
      <div style={{ backgroundColor: "black", paddingTop: 10 }}>
        {" "}
        <ContactForm />
      </div>
      {/* MyFooter */}
      <div>
        <MyFooter />
      </div>
      <div></div>
    </>
  );
}

export default Main;
