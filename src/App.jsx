import React from "react";
import Spline from "@splinetool/react-spline";
import scroll from "./assets/scroll.png";
import drag from "./assets/drag.png";
import bgAudio from "./assets/bgAudio.mp3";
const song = new Audio(bgAudio);
song.loop = true;
import "./app.css";
export default function App() {
  const [play, setPlay] = React.useState(false);
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "10px",
          fontSize: "32px",
          backgroundColor: "transparent",
          border: "none",
        }}
        onClick={() => {
          play ? song.pause() : song.play();

          setPlay((prevState) => !prevState);
        }}
      >
        {play ? "🔊" : "🔈"}
      </button>
      <Spline scene="https://prod.spline.design/nfgy9YplU9epWFHF/scene.splinecode" />
      <ul
        className="instructions"
        style={{
          lineHeight: "2.4",
          background: "rgb(250,250,250,0.8)",
          position: "absolute",
          bottom: "20px",
          left: "10px",

          height: "240px",
          borderRadius: "5px",
          color: "black",

          padding: "10px",
          listStyle: "none",
        }}
      >
        <li>
          {" "}
          👉🏻 {" "}
          <kbd>
            <img
              src={scroll}
              alt="scroll"
              style={{
                width: "20px",
              }}
            />
          </kbd>{" "}
          into view to zoom in.{" "}
        </li>
        <li>
          {" "}
          👉🏻  click and{" "}
          <kbd>
            <img
              src={drag}
              alt="drag"
              style={{
                width: "20px",
                borderRadius: "50%",
              }}
            />
          </kbd>{" "}
          to spin the view.
        </li>
        <li>
          {" "}
          👉🏻  click <kbd>🔈</kbd> to play a song from my favorite movie!
        </li>
      </ul>
    </div>
  );
}
