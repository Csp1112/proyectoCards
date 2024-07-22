import React from "react";
import '../vistas/VistasLenguaje.css'


function VistasLenguaje({lenguaje}){
    return(
        //se llaman uno a uno las propiedades de titulo, contenido e imagen de los objetos
        <div className="vistas-lenguaje"> 
            <h1>{lenguaje.ntitulo}</h1>
            <h2>{lenguaje.ncontenido}</h2>
            <img src={lenguaje.imagen} alt={lenguaje.imagen + 'imagen'}></img> 
            {/* se ubica la imagen de cada uno, si no se encuentra (alt) se coloca el texto 'imagen' */}
        </div>
    )

}

export default VistasLenguaje;