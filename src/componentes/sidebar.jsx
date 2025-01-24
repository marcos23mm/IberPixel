import React, { useState } from 'react';
import '../css/sidebar.css';

const Sidebar = ({ handleCategoryFilter }) => {
  const [activeItem, setActiveItem] = useState('all'); // Estado para el elemento seleccionado

const handleClick = (category) => {
    setActiveItem(category); // Actualiza el elemento activo
    handleCategoryFilter(category); // Llama a la función de filtrado
};

return (
    <aside className="sidebar">
        <h2>Categorías</h2>
        <ul>
        <li
            className={activeItem === 'all' ? 'active' : ''}
            onClick={() => handleClick('all')}>
            Todas
        </li>
        <li
            className={activeItem === "men's clothing" ? 'active' : ''}
            onClick={() => handleClick("men's clothing")}>
            Ropa de Hombre
        </li>
        <li
            className={activeItem === "women's clothing" ? 'active' : ''}
            onClick={() => handleClick("women's clothing")}>
            Ropa de Mujer
        </li>
        <li
            className={activeItem === 'electronics' ? 'active' : ''}
            onClick={() => handleClick('electronics')}>
            Electrónica
        </li>
        <li
            className={activeItem === 'jewelery' ? 'active' : ''}
            onClick={() => handleClick('jewelery')}>
            Joyería
        </li>
        </ul>
    </aside>
);
};

export default Sidebar;
