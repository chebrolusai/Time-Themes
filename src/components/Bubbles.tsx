import { useEffect, useState } from "react";
import "../CSS/Bubbles.css";

function Bubbles() {
  const [clock, setClock] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <div id="bubbles">
        <div className="bubble bubbleBlue"></div>
        <div className="bubble bubblePink"></div>
        <div className="bubble bubbleRed"></div>
        <div className="bubble bubbleOrange"></div>
        <div className="bubble bubbleYellow"></div>
        <div className="bubble bubbleGreen"></div>
        <div className="bubble bubblePurple"></div>
        <h1 className=" glassDate gradientDate text-center d-flex align-items-center justify-content-center vh-100">
          {clock}
        </h1>
      </div>
    </>
  );
}

export default Bubbles;
