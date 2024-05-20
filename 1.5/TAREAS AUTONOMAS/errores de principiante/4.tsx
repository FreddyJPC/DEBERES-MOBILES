import React, { useRef, useEffect } from 'react';

function EjemploReferencias() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Incorrecto: Accediendo directamente a inputRef.current
    inputRef.current.focus();
  }, []); // Sin dependencias, se ejecutará solo una vez

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default EjemploReferencias;
