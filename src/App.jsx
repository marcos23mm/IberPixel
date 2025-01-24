import React, { useState, useEffect } from 'react';
import './css/App.css';
import Navbar from './componentes/navbar';
import Sidebar from './componentes/sidebar';
import FilterBar from './componentes/filterbar';
import ProductList from './componentes/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // carga y errores
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al cargar los productos.');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        //termina el estado de carga
        setIsLoading(false); 
      })
      .catch((error) => {
        setError(error.message); // capturamos el error y cerramos el estado de carga
        setIsLoading(false); 
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (activeCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === activeCategory);
    }

    if (priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

    setFilteredProducts(filtered);
  }, [products, activeCategory, priceRange, sortOrder, searchTerm]);

  if (isLoading) {
    return <div className="loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="main-container">
        <div className="content-container">
          <Sidebar handleCategoryFilter={setActiveCategory} />
          <main className="content">
            <FilterBar sortOrder={sortOrder} handleSortChange={(e) => setSortOrder(e.target.value)} />
            <ProductList products={filteredProducts} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
