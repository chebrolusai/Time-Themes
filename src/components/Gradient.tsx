import "../CSS/Gradient.css";
import { useState, useEffect } from "react";

function Gradient() {
  const [gradientType, setGradient] = useState<string>("gradient-3");
  const [clock, setClock] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const handleGradientChange = (selectedGradient: string) => {
    setGradient(selectedGradient);
  };

  return (
    <>
      <div id={gradientType} className="gradientEffect">
        <div className="dropdown position-absolute px-2 py-2">
          <button
            className="btn btn-sm dropdown-toggle glassButton"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Gradient
          </button>
          <ul className="dropdown-menu py-0">
            <li>
              <a
                className="dropdown-item gradientType1"
                href="#"
                onClick={() => handleGradientChange("gradient-1")}
              ></a>
            </li>
            <li>
              <a
                className="dropdown-item gradientType2"
                href="#"
                onClick={() => handleGradientChange("gradient-2")}
              ></a>
            </li>
            <li>
              <a
                className="dropdown-item gradientType3"
                href="#"
                onClick={() => handleGradientChange("gradient-3")}
              ></a>
            </li>
          </ul>
        </div>
        <h1 className=" gradientDate text-center d-flex align-items-center justify-content-center vh-100">
          {clock}
        </h1>
      </div>
    </>
  );
}

export default Gradient;
