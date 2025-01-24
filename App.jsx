import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './componentes/ProductList';
import carritoIcon from './carrito-de-compras.png';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(null); // { min: number, max: number }
  const [searchTerm, setSearchTerm] = useState(''); // Nuevo estado para la búsqueda

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filtrar por categoría
    if (activeCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === activeCategory);
    }

    // Filtrar por rango de precios
    if (priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar los productos
    filtered.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

    setFilteredProducts(filtered);
  }, [products, activeCategory, priceRange, sortOrder, searchTerm]);

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  const handlePriceFilter = (min, max) => {
    setPriceRange({ min, max });
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
  };

  return (
    <div className="app">
      {/* Navbar */}
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

      {/* Contenedor Principal */}
      <div className="main-container">
        {/* Contenedor con Barra Lateral y Productos */}
        <div className="content-container">
          {/* Sidebar de Categorías */}
          <aside className="sidebar">
            <h2>Categorías</h2>
            <ul>
              <li onClick={() => handleCategoryFilter('all')}>Todas</li>
              <li onClick={() => handleCategoryFilter("men's clothing")}>Ropa de Hombre</li>
              <li onClick={() => handleCategoryFilter("women's clothing")}>Ropa de Mujer</li>
              <li onClick={() => handleCategoryFilter('electronics')}>Electrónica</li>
              <li onClick={() => handleCategoryFilter('jewelery')}>Joyería</li>
            </ul>
          </aside>

          {/* Contenido Central */}
          <main className="content">
            {/* Filtro por Precio */}
            <div className="filter-bar">
              <label htmlFor="sort">Buscar por Precio:</label>
              <select id="sort" value={sortOrder} onChange={handleSortChange}>
                <option value="asc">De menor a mayor</option>
                <option value="desc">De mayor a menor</option>
              </select>
            </div>

            {/* Grid de Productos */}
            <ProductList products={filteredProducts} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
