import React from "react";
import "./Card.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
            <h3>{name}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>Min&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{min}º</p>
            {/* <p>{min}°</p> */}
            <p>Max&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{max}º</p>
            {/* <p>{max}°</p> */}
            <br />
            <span>
              {" "}
              <a href="#" onClick={onClose}></a>
            </span>
            {/* <button onClick={onClose}>Quitar</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
