import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarComponents";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <>
      <div id="menu">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Menu />
        </div>
        <div>
          <img id="menu-logo" src="/logos/raccoon.webp" alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
