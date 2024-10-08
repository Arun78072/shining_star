import React from "react";
import { FaAngleRight, FaInfoCircle, FaRegStar } from "react-icons/fa";
import './UserCard.css'
export default function UserCard() {
  return (
    <div className="user_card">
      <div className="heading">
        <h2>Arun Kumar</h2> <FaRegStar />
      </div>
      <div className="progress_section">
        <span>
          <h4>Your VIP Progress</h4> <FaAngleRight />
        </span>
        <span>
          <h4>0.00%</h4> <FaInfoCircle />
        </span>
      </div>
      <div className="progress_bar"></div>
      <div className="progress_section">
        <span>
          <FaRegStar />
          <h4>None</h4>
        </span>
        <span>
          <FaRegStar />
          <h4>Bronze</h4>
        </span>
      </div>
    </div>
  );
}
