import React from "react";
import "@/styles/styles.css"; // Import the CSS file for the Navbar component
import {Search} from "./Search";

export function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side */}
      <div className="navbar-component">
        <div className="navbar-left">
          <ul className="navbar-leftside-logo">
            <img src="/sailboat.svg" alt="Sailboat" className="sailboat-icon" />{" "}
            {/* Add the SVG icon */}
            <li>Dingy Trails</li>
          </ul>

          <ul className="navbar-leftside-list">
            <li className="navbar-items">
              Trails
              <img
                src="/caret-down.svg"
                alt="CaretDown"
                className="caret-down-icon"
              />
            </li>
            <li className="navbar-items">
              Courses
              <img
                src="/caret-down.svg"
                alt="CaretDown"
                className="caret-down-icon"
              />
            </li>
            <li className="navbar-items">
              News
              <img
                src="/caret-down.svg"
                alt="CaretDown"
                className="caret-down-icon"
              />
            </li>
            <li className="navbar-items">Abouts</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          {/* Search Destination Input and Button */}
          <div className="search-container">
            <button className="search-button" popoverTarget="search-popover" id="search">
              Where to Sail{" "}
              <img
                src="/magnifying-glass.svg"
                alt="magnifying-glass"
                className="magnifying-glass-icon"
              />
            </button>
            <Search />
                        
          </div>

          {/* Log in */}
          <ul className="navbar-item">Log in</ul>

          {/* Start to Volunteer */}
          <ul className="volunteer-button">Sign Up</ul>
        </div>
      </div>
    </nav>
  );
}
