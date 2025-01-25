# IberPixel 

#Paso 1: Instrucciones de Instalación

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
  
   - footer.jsx: Creacion dek nuevo footer. Con los derechos de Copy Right.

   - carrito-de-compras.png: Recurso gráfico utilizado en la interfaz.
  
3. css/

   Como el propio nombre de la carpeta indica, esta contiene los archivos CSS para dar estilo a cada componente. Cada archivo de estilo se asocia con un componente o funcionalidad específica:

   - App.css: Estilos globales de la aplicación.
  
   - filterbar.css: Estilos relacionados con la barra de filtros.
  
   - index.css: Estilos básicos y generales para el proyecto.
  
   - navbar.css: Estilos para la barra de navegación.
  
   - ProductList.css: Estilos específicos para la lista de productos.
  
   - sidebar.css: Estilos para el menú lateral.
  
   - footer.css: Estilos para el pequeño footer creado.
  
4. src/

   Esta contiene los archivos principales del proyecto:

   - App.jsx: Componente principal de la aplicación. Aquí se gestionan los datos globales, se implementa la lógica principal y se organizan los componentes.
  
   - main.jsx: Punto de entrada de la aplicación. Monta el componente App en el DOM.
  
5. iberPixel_react/

   Esta contiene diferentes archivos que son creados cuando se hace el proyecto, pero hay uno que destaca y tendremos que cambiar que es:

   - index.html: Archivo HTML principal donde se inyecta la aplicación React.




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







   
