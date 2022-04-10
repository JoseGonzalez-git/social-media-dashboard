import ToggleButton from "./toggleButton";
import "../styles/header.sass";

let Header = () => {
  return (
    <div className="container header">
      <div>
        <h1>Social Media Dashboard</h1>
        <p>
          Total Followers: <span>250,000</span>
        </p>
      </div>
      <div className="DarkMode">
        <h4>Dark Mode</h4>
        <ToggleButton />
      </div>
    </div>
  );
};

export default Header;
