import React, { useState } from 'react';

function Hijo({ contador, onIncrement }) {
  return <button onClick={onIncrement}>Incrementar contador: {contador}</button>;
}

function Padre() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return <Hijo contador={contador} onIncrement={incrementarContador} />;
}

export default Padre;
