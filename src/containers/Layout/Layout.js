import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.css";
export default function Layout({ children }) {
  return (
    <div className="layout_wrap">
      <div className="left_sidebar">
        <Sidebar />
      </div>
      <div className="main_content">
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
