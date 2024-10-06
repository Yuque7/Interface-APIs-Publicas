import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaDog, FaSearch } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/saved">Cachorros Salvos</Link>
      <Link to="/search">Pesquisar Raça</Link>
    </nav>
  );
};

export default Nav;
