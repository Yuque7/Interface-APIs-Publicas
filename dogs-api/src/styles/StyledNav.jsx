import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 40px;
`;

export const NavLink = styled(Link)`
  margin: 0 15px;
  color: #420493;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #571ba6;
  }
`;
