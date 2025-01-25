import React from 'react';
import '../css/footer.css';

const Footer = () => {
return (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} IberPixel. Todos los derechos reservados.</p>  
    </footer>
);
};

export default Footer;
