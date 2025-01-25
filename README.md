# IberPixel 

## Paso 1: Instrucciones de Instalación

1. Crea una carpeta en Visual Studio llamada **"Proyecto_IberPixel"**.
2. Abre una terminal dentro de esa carpeta.
3. Ejecuta el siguiente comando: `npm create vite@latest`.
4. Introduce el nombre del proyecto: **"iberPixel_react"**.
5. Selecciona:
   - Framework: **React**
   - Lenguaje: **JavaScript**
6. Sigue los pasos:
   - `cd iberPixel_react`
   - `npm install`
   - `npm run dev`
7. Cuando ejecutes el proyecto, se generará un enlace. Accede a él mediante el comando (Ctrl + Click en el enlace) para visualizar la página web.


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



## 📑 Explicación de la Estructura del Proyecto

El proyecto está diseñado para mantener una clara separación de responsabilidades y facilitar su mantenimiento:

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


Posibles mejoras a largo plazo:

   Debido al poco tiempo tenido para desarrollar esta pequeña web y a que actualmente estoy en el proceso de aprender y obtener nuevos conocimientos sobre React, la aplicacion web no ha quedado como a mi me hubiera gustado. 
   Las mejoras que yo le hubiera hecho serian las siguientes:

   1. Añadir más filtros para la busqueda de los productos. Actualmente solo cuenta con ordenacion por precio en orden ascendente y descendente, aparte del filtrado por categorias. Y me hubiera gustado implementar mas filtros como rangos de       precio.
   2. Una experiencia mas agradable al usuario. Con esto me refiero a la implemetacion de:
      a)Un modo claro y oscuro.
      b)Poder añadir mas de un idioma a la pagina.
      c)Un carrito de compra funcional al que poder añadir los productos.
      d)Vista de cada producto individual que cuento con un boton para poder añadir al carrito.
      e)Puntuacion del producto.
      f)Un logo para la pagina web que al hacer click en el te devolviera a la pagina principal.
      g)Poner informacion adicional en el footer. Como elementos de contacto, sobre nosotros, etc. Aparte de más ideas.
      
   4. Tambien en cuanto a la parte visual de la pagina me gustaria poderle haber dedicado mas tiempo ya que es algo que a titulo personal me gusta mas. Y viendo como ha quedado, como atractivo al usuario deja algo que desear.





Decisiones tecnicas: 


En cuanto a las decisiones tecnicas, podemos empezar por:

1. Estructura del proyecto:

   Decidí agrupar los componentes reutilizables en una carpeta componentes y sus estilos en css para mantener       una separación clara entre lógica y presentación.

2. Eleccion de la Tecnologia:

   En mi caso decidi utilizar React-Vite debido a que hace muy poco comenze a utilizarlo y era una tecnologia muy llamativa debido al uso de JavaScript, tecnologia en la cual me gustaria especializarme. Aparte de CSS y HTML que son componentes esenciales para el desarrollo web. 

3. Logica de estado:

   Centralicé el estado de los productos en App.jsx con useState y useEffect. Esto permitió filtrar, ordenar y buscar productos desde un único punto de control.

4. Diseño responsive:

   Incluí media queries en App.css, filterbar.css, footer.css e index.css para poder adaptar la interfaz a diferentes tamaños de pantalla.

5. Manejo simple de errores:

   Implementé manejo de errores en App.jsx para asegurar que se informe al usuario en caso de fallos al cargar los productos.



Conclusion del proyecto:

Para mi lo mas importante de este proyecto ha sido mejorar en una tecnologia en la cual soy principiante aprendiendo mediante la IA, W3Schools, etc. Tambien a aprender a seguir las intrucciones de lo que podria ser un proyecto final en la cual se detallan correctamente las funcionalidades principales a desarrollar a si como las posibles mejoras a introducir.







   
