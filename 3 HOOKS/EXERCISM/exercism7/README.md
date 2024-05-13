# DecodedResistorValue Component

Este componente de React, `DecodedResistorValue`, permite decodificar el valor de una resistencia eléctrica a partir de los colores de sus bandas. Es útil en proyectos donde se necesite interpretar rápidamente el valor de una resistencia en un circuito electrónico.

## Uso

Para utilizar este componente, importa `DecodedResistorValue` en tu archivo y pásale un array de colores como prop `colors`. El componente calculará y mostrará el valor de la resistencia decodificado, así como su métrica correspondiente.

## EJEMPLO
Supongamos que tienes una resistencia eléctrica con las bandas de colores "rojo", "marrón" y "verde". El valor de la resistencia decodificado sería:
<DecodedResistorValue colors={['red', 'brown', 'green']} />
MOSTRARA: Decoded resistor value: 250 kiloohms


javascript


```javascript
import React from 'react';
import DecodedResistorValue from './DecodedResistorValue';

function App() {
  return (
    <div>
      <DecodedResistorValue colors={['red', 'brown', 'green']} />
    </div>
  );
}

export default App;
