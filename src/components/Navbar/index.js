import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarComponents";

const Navbar = () => {
  return (
    <>
      <div id="menu">
        <div>
          <img id="menu-logo" src="/raccoon.png" alt="Logo" />
        </div>
        <Nav>
          <NavMenu>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/3d">3D</NavLink>
            <NavLink to="/paintings">Peinture et Dessin</NavLink>
            <NavLink to="/animation">Animation </NavLink>
            <NavLink to="/about">À propos</NavLink>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
