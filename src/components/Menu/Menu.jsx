// src/Menu.jsx
import React, { useState, useEffect, useRef } from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      <button id="menuButton" onClick={handleMenuToggle}>
        <img src="/menu/menu-icon.webp" alt="Menu" />
      </button>
      {isOpen && (
        <div id="dropdownMenu" className="dropdown-menu">
          <NavLink to="/" className="menu-item">
            Accueil
          </NavLink>
          <NavLink to="/posters" className="menu-item">
            Affiches
          </NavLink>
          <NavLink to="/custom" className="menu-item">
            Personnalisation
          </NavLink>
          <NavLink to="/concepts" className="menu-item">
            Concepts
          </NavLink>
          <NavLink to="/animation" className="menu-item">
            Animation
          </NavLink>
          <NavLink to="/paintings" className="menu-item">
            Peintures
          </NavLink>
          <NavLink to="/3d" className="menu-item">
            3D
          </NavLink>
          <NavLink to="/about" className="menu-item">
            À propos
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Menu;
