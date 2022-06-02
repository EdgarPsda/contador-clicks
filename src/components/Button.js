import React from "react";
import "../styles/Button.css";

function Button({ texto, esBotonClick, manejarClick }) {
  return (
    <button
      className={esBotonClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Button;
