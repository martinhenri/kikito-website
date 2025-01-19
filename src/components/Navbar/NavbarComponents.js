import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  display: inline;
  padding-left: 15px;
  padding-right: 15px;
  border-left: 1px solid rgb(153, 153, 153);
  font-size: 16px;
  color: white;
  text-decoration: auto;
  font-weight: 300;
  transition: all 0.5s ease-in-out;

  &:active {
    color: #ff0000;
  }
  &:first-child {
    border-left: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
