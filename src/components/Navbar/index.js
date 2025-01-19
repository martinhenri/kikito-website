import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarComponents";

const Navbar = () => {
  return (
    <>
      <div id="menu">
        <div>
          <img id="menu-logo" src="/logos/raccoon.webp" alt="Logo" />
        </div>
        <Nav>
          <NavMenu>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
