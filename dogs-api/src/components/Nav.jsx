import React from 'react';
import {NavLink,Navbar} from '../styles/StyledNav'

const Nav = () => {
  return (
    <Navbar>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/saved">Cachorros Salvos</NavLink>
    <NavLink to="/search">Pesquisar Raça</NavLink>
  </Navbar>
  );
};

export default Nav;
