import React from "react";
import "./BannerCard.css";
import { CiBaseball } from "react-icons/ci";
export default function BannerCard({imgLink}) {
  return (
    <div className="banner_card">
      <img src={imgLink} />
      <div className="bottom_bar">
        <CiBaseball />
        <h4>Casino</h4>
      </div>
    </div>
  );
}
