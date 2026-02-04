import React from "react";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <>
      <div id="menu">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Menu />
        </div>
        <div>
          <img
            id="menu-logo"
            src="/logos/raccoon.webp"
            alt="Logo"
            onClick={() => (window.location.href = "/home")}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
