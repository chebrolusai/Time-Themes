import React, { ReactElement, useState } from "react";
import Gradient from "./components/Gradient";
import NightSky from "./components/NightSky";
import Bubbles from "./components/Bubbles";
import Neon from "./components/Neon";

function App() {
  const [theme, setTheme] = useState<ReactElement>(<Gradient />);

  const handleThemeChange = (theme: number) => {
    switch (theme) {
      case 1:
        setTheme(<Gradient />);
        return;
      case 2:
        setTheme(<NightSky />);
        return;
      case 3:
        setTheme(<Bubbles />);
        return;
      case 4:
        setTheme(<Neon />);
        return;
    }
  };

  return (
    <div className="mainContainer">
      <div className="dropdown customDropdown position-absolute">
        <button
          className="btn btn-sm dropdown-toggle glassButton"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Switch Theme
        </button>
        <ul className="dropdown-menu py-0">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleThemeChange(1)}
            >
              Gradient
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleThemeChange(2)}
            >
              Night Sky
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleThemeChange(3)}
            >
              Bubbles
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleThemeChange(4)}
            >
              Neon
            </a>
          </li>
        </ul>
      </div>
      {theme}
    </div>
  );
}

export default App;
