import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    console.log("event: ", event);
    event.preventDefault();

    // Validaciones
    if (nombre.trim().length < 3 || nombre.trim().startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta.");
      setSubmitted(false);
      return;
    }
    const hexColorPattern = /^#[0-9A-F]{6}$/i;
    if (!hexColorPattern.test(color)) {
      setError("Por favor chequea que la información sea correcta.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <div className="App">
        <h1>Elige un color</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="text"
            placeholder="Ingresa tu color favorito (formato HEX)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">ENVIAR</button>
        </form>

        {error && <div className="error">{error}</div>}

        {submitted && !error && <Card nombre={nombre} color={color} />}
      </div>
    </>
  );
}

export default App;
