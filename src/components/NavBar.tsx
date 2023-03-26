import "./css/navbar.css";
import logo from "../assets/logos/NoBGLogo.png";
import menulogo from "../assets/icons/Menu.png";

function NavBar() {
  return (
    <div className="navbar-wrapper">
      <button className="logo-button">
        <img src={logo} />
      </button>
      <h1 className="header">Denger</h1>
      <button className="menu-button">
        <img src={menulogo} />
      </button>
      <div id="sidebar-wrapper"></div>
    </div>
  );
}

export default NavBar;
