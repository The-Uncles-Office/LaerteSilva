import React from "react";
import "./Header.css";

export default Header => (
  <div className="page">
    <header tabindex="0">
      <a href="/">
        <img className="logo" src={Header.logo} alt="logo"></img>
      </a>
    </header>
    <div id="nav-container">
      <div className="bg"></div>
      <div className="button" tabindex="0">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>
      <div id="nav-content" tabindex="0">
        {Header.children}
      </div>
    </div>
  </div>
);
