import React, { useEffect, useState } from "react";
import "./navBar.scss";
import { FaGithub } from "react-icons/fa";

//website nav bar
const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo flex">
          <FaGithub size={40} />
          <h3>Github Repos</h3>
        </div>
      </div>
    </>
  );
};

export default NavBar;
