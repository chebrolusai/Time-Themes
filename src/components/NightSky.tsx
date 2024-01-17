import { useEffect, useState } from "react";
import "../CSS/Dark.css";

function NightSky() {
  const [clock, setClock] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  function createStar() {
    const stars = document.getElementById("stars");
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    stars?.appendChild(star);
  }

  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      createStar();
    }
  }, []);

  return (
    <>
      <div className="darkEffect">
        <div id="stars"></div>
        <h1 className=" gradientDate text-center d-flex align-items-center justify-content-center vh-100">
          {clock}
        </h1>
      </div>
    </>
  );
}

export default NightSky;
