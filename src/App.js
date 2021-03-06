import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import freecodecampLogo from "./images/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Counter numClicks={numClicks} />
        <Button texto="Click" esBotonClick={true} manejarClick={manejarClick} />
        <Button
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
