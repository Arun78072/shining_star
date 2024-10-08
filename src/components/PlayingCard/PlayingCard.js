import React from "react";
import "./PlayingCard.css";
export default function PlayingCard({ data }) {
  return (
    <div className="card">
      <div className="image_box">
        <span>{data.id}</span>
        <img src={data.image} />
      </div>
      <h3>
        <span className="green-dot"></span>
        {data.play} <span>Playing</span>
      </h3>
    </div>
  );
}
