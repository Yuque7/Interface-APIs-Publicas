import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const NavLink = styled(Link)`
  margin: 0 15px;
  color: #F6F3EC;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #f7e6bf;
  }
`;
