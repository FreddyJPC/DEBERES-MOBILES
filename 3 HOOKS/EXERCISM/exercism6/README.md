Documentación del Proyecto React - DecodedValue / Freddy paguay
# DecodedValue Component

Este componente de React, `DecodedValue`, permite decodificar un valor numérico a partir de colores específicos. Es útil en situaciones donde se trabaja con códigos de resistencias eléctricas, donde cada color representa un valor numérico.

## Uso

Para utilizar este componente, simplemente importa `DecodedValue` en tu archivo y pásale un array de colores como prop `colors`. El componente calculará y mostrará el valor numérico decodificado.

## Ejemplo
Supongamos que tienes una resistencia eléctrica con las bandas de colores "rojo" y "negro". El valor numérico decodificado sería:
<DecodedValue colors={['red', 'black']} />
MOSTRARA: Decoded value: 20





```javascript
import React from 'react';
import DecodedValue from './DecodedValue';

function App() {
  return (
    <div>
      <DecodedValue colors={['red', 'black']} />
    </div>
  );
}

export default App;

Props
colors
Tipo: string[]
Descripción: Un array de strings que representan los colores de las bandas de la resistencia eléctrica. El orden de los colores es importante, ya que determina el valor numérico decodificado.


