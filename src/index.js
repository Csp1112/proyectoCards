import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router DOM es una biblioteca para React que facilita la navegación entre componentes
// o vistas basados en URL sin recargar la página. Permite definir rutas y manejar la historia
// del navegador para crear aplicaciones web de una sola página (SPA) con una experiencia de usuario fluida.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import tarjetas from './datos/tarjetas.js'; //tiene al arreglo de objetos

//importamos router -> dependencia para hacer el router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//importamos nuestro archivo VistasLenguaje
import VistasLenguaje from './vistas/VistasLenguaje.js';


// Definimos un arreglo de rutas para la navegación de la aplicación.
const router = [
  {
    path: '/', // Ruta principal o raíz de la aplicación.
    element: <App />, // Componente que se renderiza en la ruta principal.
  }
];

// Iteramos sobre cada elemento en el arreglo 'tarjetas'.
tarjetas.forEach((lenguaje) => {
  // Añadimos una nueva ruta para cada 'lenguaje' en 'tarjetas'.
  router.push({
    path: lenguaje.ntitulo, // Usamos el 'ntitulo' del lenguaje como la ruta.
    element: <VistasLenguaje lenguaje={lenguaje} />, // Componente que se renderiza para la ruta específica.
  });
});

// Creamos las rutas de la aplicación usando 'createBrowserRouter'.
const routes = createBrowserRouter(router);

// Obtenemos el nodo DOM con el id 'root', donde se renderizará la aplicación.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación en modo estricto, que activa verificaciones y advertencias adicionales.
root.render(
  <React.StrictMode>
    {/* Proveedor de rutas para la aplicación, que usa las rutas definidas en 'routes'. */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
