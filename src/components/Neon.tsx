import { useEffect, useState } from "react";
import "../CSS/Neon.css";

function Neon() {
  const [clock, setClock] = useState<string>();
  const [neonColor, setNeonColor] = useState<string>("purpleNeon");

  const handleNeonChange = (neon: string) => {
    setNeonColor(neon);
  };

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div className="neonContainer">
        <div className="dropdown position-absolute px-2 py-2 z-1">
          <button
            className="btn btn-sm dropdown-toggle glassButton"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Neon
          </button>
          <ul className="dropdown-menu py-0">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleNeonChange("purpleNeon")}
              >
                Purple
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleNeonChange("redNeon")}
              >
                Red
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleNeonChange("blueNeon")}
              >
                Blue
              </a>
            </li>
          </ul>
        </div>
        <h1
          id={neonColor}
          data-reflection={clock}
          className=" neonText text-center d-flex align-items-center justify-content-center vh-100"
        >
          {clock}
        </h1>
      </div>
    </>
  );
}

export default Neon;
