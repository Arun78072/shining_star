import React from "react";
import PlayingCard from "../../components/PlayingCard/PlayingCard";
import { CardData } from "../../data/CardData";
import "./HomePage.css";
import { FaFantasyFlightGames } from "react-icons/fa";
import UserCard from "../../components/UserCard/UserCard";
import BannerCard from "../../components/BannerCard/BannerCard";
export default function HomePage() {
  return (
    <div>
      <div className="banner_section">
        <UserCard />
        <div className="cards">
          <BannerCard
            imgLink={"https://mediumrare.imgix.net/explore-casino-en.png"}
          />
          <BannerCard
            imgLink={"https://mediumrare.imgix.net/explore-sports-en.png"}
          />
        </div>
      </div>
      <div className="card_heading">
        <FaFantasyFlightGames />
        <h3> Trending Games</h3>
      </div>
      <div className="trending_card">
        {CardData.map((item) => (
          <PlayingCard data={item} />
        ))}
      </div>
      <div className="card_heading">
        <FaFantasyFlightGames />
        <h3> Trending Games</h3>
      </div>
      <div className="trending_card">
        {CardData.map((item) => (
          <PlayingCard data={item} />
        ))}
      </div>
    </div>
  );
}
