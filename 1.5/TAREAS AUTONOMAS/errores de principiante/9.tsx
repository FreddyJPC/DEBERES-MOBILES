import React, { useRef } from 'react';

function EjemploRef() {
  const inputRef = useRef(null);

  const obtenerValor = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={obtenerValor}>Obtener Valor</button>
    </div>
  );
}

export default EjemploRef;
