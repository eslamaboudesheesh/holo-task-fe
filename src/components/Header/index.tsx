import React from "react";
import "./index.scss";

type HeaderProps = {
  icon: string;
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({ icon, title, subtitle }) => (
  <div className="header-container">
    <img className="header-icon" src={icon} alt="github icon" />
    <div className="title-container">
      <p className="header-title"> {title}</p>
      <p className="header-subtitle"> {subtitle} </p>
    </div>
  </div>
);

export default Header;
