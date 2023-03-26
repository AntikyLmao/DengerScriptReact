function Sidebar() {
  const buttons = ["Home", "Scripts", "YouTube", "Discord", "Contact"];
  return (
    <div className="SideBar-Wrapper">
      <ul>
        {buttons.map((button) => (
          <li className={button}>{button}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
