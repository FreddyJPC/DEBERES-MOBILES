import React, { useState } from 'react';

function EjemploModificacionEstado() {
  const [texto, setTexto] = useState('');

  // Incorrecto: Modificar el estado directamente
  const handleChange = (e) => {
    texto = e.target.value; // Error aquí
    setTexto(texto);
  };

  return (
    <div>
      <input type="text" value={texto} onChange={handleChange} />
      <p>Texto: {texto}</p>
    </div>
  );
}

export default EjemploModificacionEstado;
