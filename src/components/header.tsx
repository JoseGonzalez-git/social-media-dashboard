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
      <ToggleButton />
    </div>
  );
};

export default Header;
