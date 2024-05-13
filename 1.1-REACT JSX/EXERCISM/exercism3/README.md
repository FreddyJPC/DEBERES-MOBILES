DOCUMENTACION MARKDOWN - EXERCISM 3
# Documentación del Proyecto React - Resistor Color Code

Este proyecto React incluye un componente llamado `ResistorColorCode`, que representa un código de colores para resistencias.

## Componente `ResistorColorCode`

El componente `ResistorColorCode` se encuentra en el archivo `exercism.tsx`. Este componente muestra una lista de colores que representan los códigos de colores utilizados en las resistencias.

### Métodos

#### `colorCode(color: string): number`

Este método toma un color como argumento y devuelve el índice del color en el código de colores de las resistencias. Si el color proporcionado no es válido, lanzará un error.

### Ejemplo de Uso

```jsx
import React from 'react';
import ResistorColorCode from './components/ResistorColorCode';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Mi Aplicación</h1>
        <ResistorColorCode />
      </div>
    );
  }
}

export default App;