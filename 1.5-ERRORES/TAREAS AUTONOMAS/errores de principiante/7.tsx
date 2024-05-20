import React, { useState, useEffect } from 'react';

function EjemploError() {
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      // Código que puede lanzar un error
      throw new Error('Este es un error de ejemplo');
    } catch (error) {
      setError(true);
    }
  }, []);

  if (error) {
    return <p>¡Ups! Ha ocurrido un error.</p>;
  }

  return <p>No ha ocurrido ningún error.</p>;
}

export default EjemploError;
