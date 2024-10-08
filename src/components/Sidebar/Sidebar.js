import React, { useState } from "react";
import "./Sidebar.css";
import { TiThMenu } from "react-icons/ti";
import { AiFillMessage, AiOutlineMenu } from "react-icons/ai";
import {
  FaAward,
  FaBloggerB,
  FaGift,
  FaStarOfLife,
  FaUser,
} from "react-icons/fa";
export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sidebar_menu">
      <aside className={menuOpen ? "active" : ""}>
        <div className="top_section">
          <button
            className="action_button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div className="menu_bar">
          <div className="menu_box web_menu">
            <div className="menu">
              <FaUser />
              <span> Profile</span>
            </div>
            <div className="menu">
              <FaGift /> <span>Promotions</span>
            </div>
            <div className="menu">
              <FaStarOfLife /> <span>Affiliate</span>
            </div>
            <div className="menu">
              <FaAward /> <span>VIP Club</span>
            </div>
            <div className="menu">
              <FaBloggerB /> <span>Blog</span>
            </div>
            <div className="menu">
              <AiFillMessage /> <span>Forum</span>
            </div>
          </div>
          <div className="menu_box web_menu">
            <div className="menu">
              <FaUser />
              <span> Profile</span>
            </div>
            <div className="menu">
              <FaGift /> <span>Promotions</span>
            </div>
            <div className="menu">
              <FaStarOfLife /> <span>Affiliate</span>
            </div>
            <div className="menu">
              <FaAward /> <span>VIP Club</span>
            </div>
            <div className="menu">
              <FaBloggerB /> <span>Blog</span>
            </div>
            <div className="menu">
              <AiFillMessage /> <span>Forum</span>
            </div>
          </div>

          <div className="menu_box mobile_menu ">
            <div className="menu">
              <FaUser />
            </div>
            <div className="menu">
              <FaGift />
            </div>
            <div className="menu">
              <FaStarOfLife />
            </div>
            <div className="menu">
              <FaAward />
            </div>
            <div className="menu">
              <FaBloggerB />
            </div>
            <div className="menu">
              <AiFillMessage />
            </div>
          </div>
          <div className="menu_box mobile_menu ">
            <div className="menu">
              <FaUser />
            </div>
            <div className="menu">
              <FaGift />
            </div>
            <div className="menu">
              <FaStarOfLife />
            </div>
            <div className="menu">
              <FaAward />
            </div>
            <div className="menu">
              <FaBloggerB />
            </div>
            <div className="menu">
              <AiFillMessage />
            </div>
          </div>
        </div>
      </aside>
      <div className="cover_div" onClick={() => setMenuOpen(!menuOpen)}></div>
    </div>
  );
}
