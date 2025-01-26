# IberPixel 

## Paso 1: Instrucciones de Instalación

1. Lo primero que tenemos que hacer es descargar node.js (https://nodejs.org/es).
2. Creamos una carpeta en Visual Studio llamada **"Proyecto_IberPixel"**.
3. Abre una terminal dentro de esa carpeta.
4. Ejecuta el siguiente comando: `npm create vite@latest`.
5. Introduce el nombre del proyecto: **"iberPixel_react"**.
6. Selecciona:
   - Framework: **React**
   - Lenguaje: **JavaScript**
7. Sigue los pasos:
   - `cd iberPixel_react`
   - `npm install`
   - `npm run dev`
8. Cuando ejecutes el proyecto, se generará un enlace. Accede a él mediante el comando (Ctrl + Click en el enlace) para visualizar la página web.


---

## Paso 2: Estructura del Proyecto

Asegúrate de que los archivos se organicen de la siguiente forma.

Ahora pasaremos a introducir los archivos que hay en el GitHub a nuestro proyecto.

Aqui un ejemplo de como tienen que quedar los archivos introducidos en nuetra carpeta:


Proyecto_IberPixel/

├── iberPixel_react/

│   ├── node_modules/

│   ├── public/

│   ├── src/

│   │   ├── componentes/

│   │   │   ├── carrito-de-compras.png

│   │   │   ├── filterbar.jsx

│   │   │   ├── navbar.jsx

│   │   │   ├── ProductList.jsx

│   │   │   ├── sidebar.jsx

│   │   ├── css/

│   │   │   ├── App.css

│   │   │   ├── filterbar.css

│   │   │   ├── index.css

│   │   │   ├── navbar.css

│   │   │   ├── ProductList.css

│   │   │   ├── sidebar.css

│   │   ├── App.jsx

│   │   ├── main.jsx

│   ├── .gitignore

│   ├── eslint.config.js

│   ├── index.html

│   ├── package-lock.json

│   ├── package.json

│   ├── README.md

│   ├── vite.config.js


Ejecuta nuevamente `npm run dev` (si nno lo has hecho antes) para generar el enlace de acceso a la página.

---

## Explicación de la Estructura del Proyecto

El proyecto está diseñado para mantener una clara separación de elementos y facilitar su mantenimiento:

### 1. **Carpeta `src`**
Contiene el código fuente principal de la aplicación.

### 2. **`componentes/`**
Almacena los componentes reutilizables:
- **`navbar.jsx`**: Barra de navegación principal.
- **`sidebar.jsx`**: Menú lateral con opciones de filtrado.
- **`filterbar.jsx`**: Barra de filtros para ordenar y buscar productos.
- **`ProductList.jsx`**: Lista de productos basada en los filtros.
- **`footer.jsx`**: Footer con derechos de autor.
- **`carrito-de-compras.png`**: Recurso gráfico.

### 3. **`css/`**
Archivos de estilo organizados por componente:
- `App.css`: Estilos globales.
- `filterbar.css`: Barra de filtros.
- `index.css`: Estilos básicos.
- `navbar.css`: Barra de navegación.
- `ProductList.css`: Lista de productos.
- `sidebar.css`: Menú lateral.
- `footer.css`: Footer.

### 4. **Archivos principales**
- **`App.jsx`**: Componente principal para manejar la lógica y estados globales.
- **`main.jsx`**: Punto de entrada que monta la aplicación.

### 5. **iberPixel_react/**

   Esta contiene diferentes archivos que son creados cuando se hace el proyecto, pero hay uno que destaca y tendremos que cambiar que es:

   - **`index.html`**: Este archivo tendra que ser sustituido por el que hay en el GitHub.
     
---


## Mejoras a Largo Plazo

   Debido al tiempo tenido para desarrollar esta pequeña web y a que actualmente estoy en el proceso de aprender y obtener nuevos conocimientos sobre React, la aplicación web no ha quedado como a mí me hubiera gustado.
Las mejoras que yo le hubiera hecho serían las siguientes:

   1. Añadir más filtros para la búsqueda de los productos. Actualmente solo cuenta con ordenación por precio en orden ascendente y descendente, aparte del filtrado por categorías. Me hubiera gustado implementar más filtros como rangos de precio.
   2. Una experiencia más agradable para el usuario. Con esto me refiero a la implementación de:
      -Un modo claro y oscuro.
      -Poder añadir más de un idioma a la página.
      -Un carrito de compra funcional al que poder añadir los productos.
      -Vista de cada producto individual que cuente con un botón para poder añadir al carrito.
      -Puntuación del producto.
      -Un logo para la página web que al hacer clic en él te devuelva a la página principal.
      -Poner información adicional en el footer, como elementos de contacto, sobre nosotros, etc., aparte de más ideas.
      
   3. También en cuanto a la parte visual de la página, me gustaría haberle dedicado más tiempo, ya que es algo que, a título personal, me gusta más. Y viendo cómo ha quedado, como atractivo al usuario hay que mejorar.


---


## Decisiones Técnicas


En cuanto a las decisiones tecnicas, podemos empezar por:

1. **Estructura del proyecto**:

   -Decidí agrupar los componentes reutilizables en una carpeta componentes y sus estilos en css para mantener       una separación clara entre lógica y presentación.

2. **Elección de tecnología**:

   -En mi caso decidi utilizar React-Vite debido a que hace muy poco comenze a utilizarlo y era una tecnologia muy llamativa debido al uso de JavaScript, tecnologia en la cual me gustaria especializarme. Aparte de CSS y HTML que son componentes esenciales para el desarrollo web.
   
3. **Lógica de estado**:

   -Centralicé el estado de los productos en App.jsx con useState y useEffect. Esto permitió filtrar, ordenar y buscar productos desde un único punto de control.

4. **Diseño responsive**:

   -Incluí media queries en App.css, filterbar.css, footer.css e index.css para poder adaptar la interfaz a diferentes tamaños de pantalla.

5. **Manejo simple de errores**:

   -Implementé manejo de errores en App.jsx para asegurar que se informe al usuario en caso de fallos al cargar los productos.


---


## Conclusión del Proyecto

Aunque he podido lograr los requisitos básicos, hay mucho margen para mejorar en funcionalidad y diseño. Lo mejor del proyecto ha sido aprender a estructurar un proyecto real, gestionar estados globales y aplicar diseño responsive. Con más tiempo, habría implementado funcionalidades adicionales como las mencionadas anteriormente. Este proceso ha sido una gran oportunidad para aplicar lo aprendido y mejorar en una tecnologia en la que llevo poco tiempo.







   
