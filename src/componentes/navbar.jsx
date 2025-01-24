import React from 'react';
import carritoIcon from './carrito-de-compras.png';
import '../css/navbar.css';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Mi Tienda</h1>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img alt="Buscar" className="search-icon" />
      </div>
      <div className="navbar-cart">
        <img src={carritoIcon} alt="Carrito de compras" className="cart-icon" />
        <span className="cart-tooltip">Trabajando en ello...</span>
      </div>
    </header>
  );
};

export default Navbar;
