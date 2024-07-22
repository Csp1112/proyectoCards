import './App.css';
import Tarjeta from './componentes/Tarjeta';
import './componentes/Tarjeta.css'
import tarjetas from './datos/tarjetas';

// Definimos un componente funcional llamado App.
function App() {

  // 'tarjetas' es un arreglo que contiene objetos con propiedades 'ntitulo', 'ncontenido' e 'imagen'.
  // 'map' es un método que crea un nuevo arreglo al aplicar una función a cada elemento del arreglo original.
  // Aquí, estamos creando un nuevo componente 'Tarjeta' para cada elemento en 'tarjetas'.
  // 'key' es una prop especial en React que ayuda a identificar elementos únicos en una lista.
  const listaLenguajes = tarjetas.map((t, index) => {
    // Retornamos el componente 'Tarjeta' con las propiedades necesarias.
    return <Tarjeta key={index} titulo={t.ntitulo} contenido={t.ncontenido} imagen={t.imagen} />
  });

  // La función 'App' retorna el JSX que define la interfaz de usuario.
  return (
    <div className="App">
      {/* Este es el encabezado de la página web. */}
      <h1>Bienvenido al proyecto de tarjetas</h1>

      {/* 'container' es una clase CSS que estiliza el contenedor de las tarjetas. */}
      <div className='container'>
        {/* Aquí se renderizan todas las tarjetas mapeadas anteriormente. */}
        {listaLenguajes}
      </div>
    </div>
  );
}

export default App;
