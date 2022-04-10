import "../styles/toggleButton.sass";
import { ThemeContext, themes } from "../utils/themes";
import { useState } from "react";
let ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
    
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ?   themes.dark : themes.light);
              }}
            />
            <span className="slider round"></span>
          </label>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default ToggleButton;
