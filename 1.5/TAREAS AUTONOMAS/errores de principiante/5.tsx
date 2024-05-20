import React, { useState } from 'react';

function EjemploArray() {
  // Incorrecto: Modificar el array directamente
  const [lista, setLista] = useState([]);

  const agregarElemento = () => {
    lista.push('Nuevo elemento'); // Modificando el array directamente
    setLista(lista); // Esto no activará una actualización
  };

  return (
    <div>
      <button onClick={agregarElemento}>Agregar Elemento</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default EjemploArray;
