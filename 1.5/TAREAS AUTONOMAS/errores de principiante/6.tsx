import React, { useState, useMemo } from 'react';

function EjemploMemo() {
  const [numero, setNumero] = useState(0);

  // Incorrecto: cálculo costoso sin useMemo
  const factorial = () => {
    console.log('Calculando factorial...');
    let result = 1;
    for (let i = 1; i <= numero; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div>
      <input type="number" value={numero} onChange={(e) => setNumero(parseInt(e.target.value))} />
      <p>Factorial: {factorial()}</p>
    </div>
  );
}

export default EjemploMemo;
