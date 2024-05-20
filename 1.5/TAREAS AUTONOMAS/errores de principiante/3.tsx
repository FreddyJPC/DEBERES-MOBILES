import React from 'react';

function EjemploLista() {
  const items = ['Manzana', 'Banana', 'Naranja'];

  // Incorrecto: Falta el key prop
  const listaItems = items.map((item) => <li>{item}</li>);

  return (
    <div>
      <ul>{listaItems}</ul>
    </div>
  );
}

export default EjemploLista;
