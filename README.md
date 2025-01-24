# IberPixel 


ATENCION!! (Para una correcta visualizacion de la estructura y el codigo general, seleccionar junto a la parte superior izquierda donde aparecen los siguientes elementos [Preview | Code | Blame], la palabra Code)


Paso 1:

Instrucciones de Instalacion

1. Creamos una carpeta en Visual Studio llamada "Proyecto_IberPixel"
2. Abrimos una terminal dentro de esa carpeta
3. Hacemos los siguientes comandos "npm create vite@latest"
4. Una vez puesto este comando nos pedira que ingresemos el nombre del proyecto, en nuestro caso "iberPixel_react"
5. Nos apareceran diferentes opciones de frameworks, pero nosotros elegiremos "React" y luego JavaScript
6. A continuación nos apareceran las siguientes opciones a aseguir: 1- cd iberPixel_react 2- npm install 3- npm run dev (Para poder lanzar el proyecto)
7. Cuando lanzemos nuestro proyecto nos aparecera un link el cual podremos acceder mediante el comando (Ctrl + Click en el link) y ver la pagina web

Paso 2:

Ahora pasaremos a introducir los archivos que hay en el GitHub a nuestro proyecto

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

Una vez realizado estos pasos y tengamos el codigo bien estructurado, abriremos la terminal y escribiremos: npm run dev 
Esto nos dara un link al cual podremos acceder para visualizar la pagina web.






Explicación de la estructura del proyecto:

El proyecto está organizado de la siguiente manera para mantener una clara separación de responsabilidades y facilitar el mantenimiento y escalabilidad del código:

1. Carpeta src:

   Esta contiene todo el código fuente de la aplicación.

2. componentes/:

   Esta carpeta contiene los componentes reutilizables de la aplicación. Cada componente representa una parte específica de la interfaz o funcionalidad.

   - navbar.jsx: Gestiona la barra de navegación principal.

   - sidebar.jsx: Contiene el menú lateral con opciones de filtrado.

   - filterbar.jsx: Controla los filtros para ordenar y buscar productos.

   - ProductList.jsx: Renderiza la lista de productos basada en los filtros y la categoría seleccionada.

   - carrito-de-compras.png: Recurso gráfico utilizado en la interfaz.
  
3. css/

   Como el propio nombre de la carpeta indica, esta contiene los archivos CSS para dar estilo a cada componente. Cada archivo de estilo se asocia con un componente o funcionalidad específica:

   - App.css: Estilos globales de la aplicación.
  
   - filterbar.css: Estilos relacionados con la barra de filtros.
  
   - index.css: Estilos básicos y generales para el proyecto.
  
   - navbar.css: Estilos para la barra de navegación.
  
   - ProductList.css: Estilos específicos para la lista de productos.
  
   - sidebar.css: Estilos para el menú lateral.
  
4. src/

   Esta contiene los archivos principales del proyecto:

   - App.jsx: Componente principal de la aplicación. Aquí se gestionan los datos globales, se implementa la lógica principal y se organizan los componentes.
  
   - main.jsx: Punto de entrada de la aplicación. Monta el componente App en el DOM.
  
5. iberPixel_react/

   Esta contiene diferentes archivos que son creados cuando se hace el proyecto, pero hay uno que destaca y tendremos que cambiar que es:

   - index.html: Archivo HTML principal donde se inyecta la aplicación React.
