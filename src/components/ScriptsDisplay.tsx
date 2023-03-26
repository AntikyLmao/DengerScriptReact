import eclipse from "../assets/ScriptsScreenshots/Eclipse.png";
import hyrda from "../assets/ScriptsScreenshots/Hydra.png";
import doors from "../assets/ScriptsScreenshots/Ent.png";
import "./css/ScriptsDisplay.css";

function ScriptsDisplay() {
  return (
    <div className="script-display-wrapper">
      <img className="script-display-first" src={eclipse} />
      <img className="script-display-second" src={hyrda} />
      <img className="script-display-third" src={doors} />
    </div>
  );
}

export default ScriptsDisplay;
