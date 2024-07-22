import './Tarjeta.css'
import {Link} from 'react-router-dom'

// Definimos un componente funcional llamado Tarjeta que recibe props.
function Tarjeta({ titulo="Titulo", contenido="Contenido" }) {
    // Los parámetros 'titulo' y 'contenido' tienen valores predeterminados "Titulo" y "Contenido".

    return (
        // Devuelve el JSX que define la estructura y apariencia de la tarjeta.
        <div className="tarjeta">
            {/* Link es un componente de React Router que permite la navegación sin recargar la página. */}
            {/* 'to' indica la ruta de navegación, en este caso, el valor del 'titulo'. */}
            <Link to={titulo} className='titulo-tarjeta'>
                {/* El título de la tarjeta se muestra como un encabezado de tercer nivel. */}
                <h3>{titulo}</h3>
            </Link>
            {/* El contenido de la tarjeta se muestra en un párrafo. */}
            <p>{contenido}</p>
        </div>
    );
}

// Exportamos el componente para que pueda ser usado en otras partes de la aplicación.
export default Tarjeta;