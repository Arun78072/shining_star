import { FaSearch, FaUser } from "react-icons/fa";
import "./Header.css";
export default function Header() {
  return (
    <header className="navbar">
      <img src="\Images\Icons\logo.png" className="logo_img" />
      <span className="icon">
        <FaSearch /> Search
      </span>
      <span className="icon">
        <FaUser />
      </span>
      <span className="icon">
        <FaSearch />
      </span>
      <span className="icon">
        <FaUser />
      </span>
    </header>
  );
}
