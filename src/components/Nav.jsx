import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="countainer">
      <img src={Logo} alt="img not found" className="img" />
      <h1 className="title">Weather App</h1>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}

export default Nav;
