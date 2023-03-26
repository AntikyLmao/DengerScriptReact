import eclipse from "../assets/ScriptsScreenshots/Eclipse.png";
import hyrda from "../assets/ScriptsScreenshots/Hydra.png";
import doors from "../assets/ScriptsScreenshots/Ent.png";
import "./css/ScriptsDisplay.css";

function ScriptsDisplay() {
  return (
    <div className="script-display-wrapper">
      <img id="first" src={eclipse} />
      <img id="second" className="script-display-second" src={hyrda} />
      <img id="third" className="script-display-third" src={doors} />
    </div>
  );
}

export default ScriptsDisplay;
