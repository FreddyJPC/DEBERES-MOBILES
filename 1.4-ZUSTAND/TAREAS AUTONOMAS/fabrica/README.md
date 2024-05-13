# Fábrica de Pelotas de Fútbol

Este proyecto React simula una fábrica de pelotas de fútbol. Permite producir y distribuir pelotas de fútbol, mostrando el estado actual de la fábrica en tiempo real.

## Componente `FactoryComponent`

El componente `FactoryComponent` se encuentra en el archivo `FactoryComponent.tsx`. Este componente es el punto de entrada de la aplicación y muestra la interfaz de usuario de la fábrica de pelotas de fútbol.

### Métodos

No hay métodos explícitos en este componente, pero utiliza el hook `useStore` de Zustand para acceder al estado de la fábrica y a las funciones para producir y distribuir pelotas de fútbol.

### Componentes Secundarios

- `ProductionComponent`: Muestra un botón para producir una pelota de fútbol.
- `DistributionComponent`: Muestra un botón para distribuir una pelota de fútbol.
- `FactoryStateDisplay`: Muestra el estado actual de la fábrica, incluyendo la cantidad de pelotas producidas y distribuidas.

### Ejemplo de Uso

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import FactoryComponent from './FactoryComponent';

const App = () => {
  return (
    <div>
      <h1>Fábrica de Pelotas de Fútbol</h1>
      <FactoryComponent />
    </div>
  );
};

