import React from "react";

const LeftSide = () => {
  return (
    <div className="left-side">
      <header>
        <a className="header" href="https://devchallenges.io/">
          <span>Dev</span>challenges.io
        </a>
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li id="toBold">Inputs</li>
          <li>Grid</li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSide;
