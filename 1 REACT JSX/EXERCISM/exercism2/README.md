DOCUMENTACION MARKDOWN - EXERCISM 2
# Documentación del Proyecto React - Cookie Distribution

Este proyecto React consiste en un simple componente llamado `CookieDistribution` que muestra un mensaje personalizado dependiendo del nombre proporcionado.

## Componente `CookieDistribution`

El componente `CookieDistribution` se encuentra en el archivo `exercism2.tsx`. Este componente toma un prop `name` de tipo `string` y muestra un mensaje personalizado.

### Propiedades

- `name`: El nombre para el cual se mostrará el mensaje. Debe ser de tipo `string`.

### Ejemplo de Uso

```jsx
import React from 'react';
import CookieDistribution from './components/CookieDistribution';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Cookie Distribution</h1>
        <CookieDistribution name="Do-yun" />
        <CookieDistribution name="John" />
      </div>
    );
  }
}

export default App;