import "./css/Content.css";
import ScriptsDisplay from "./ScriptsDisplay";

function LandingContent() {
  return (
    <div className="Landing-content-wrapper">
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop"></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle"></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom"></div>
        </div>
      </div>

      <ScriptsDisplay />
      <h2 className="Landing-content-h2">Get OP Scripts</h2>
      <h1 className="Landing-content-h1">For Free</h1>
      <button className="Landing-content-button">GET NOW</button>
    </div>
  );
}

export default LandingContent;
