import React from "react";

import "./Card.css";

function Card(props) {
  console.log(props.views);
  return (
    <div className="card">
      <img className="card--img" src={props.img} alt="heroImg" />
      <div className="card--details">
        <div className="card--details-loc">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div className="view-on-map">View on google maps</div>
        </div>
        <div className="card--details-title">{props.place}</div>
        <div className="card--details-date">{props.date}</div>
        <div className="card--details-text">{props.text}</div>
      </div>
    </div>
  );
}

export default Card;
