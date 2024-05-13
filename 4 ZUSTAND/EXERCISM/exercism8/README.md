# Calculadora de Edad en Planetas

Este proyecto incluye una calculadora de edad en diferentes planetas del sistema solar. Utiliza la velocidad orbital de cada planeta para calcular la edad de una persona en años terrestres.

## Función `age`

La función `age` se encuentra en el archivo `AgeCalculator.ts`. Toma dos argumentos: el nombre de un planeta (`planet`) y el número de segundos (`seconds`). Devuelve la edad aproximada de una persona en el planeta especificado, en años terrestres.

### Ejemplo de Uso

```typescript
import { age } from './AgeCalculator';

const ageOnMars = age('mars', 1000000000);
console.log(ageOnMars); // Output: 16.85
```

## Componente `AgeCalculator`

El componente `AgeCalculator` se encuentra en el archivo `AgeCalculator.tsx`. Este componente toma dos propiedades: `planet` (el nombre de un planeta) y `seconds` (el número de segundos) y muestra la edad aproximada de una persona en ese planeta.

### Ejemplo de Uso

```jsx
import React from 'react';
import AgeCalculator from './AgeCalculator';

const App = () => {
  return (
    <div>
      <h1>Calculadora de Edad en Planetas</h1>
      <AgeCalculator planet="mars" seconds={1000000000} />
    </div>
  );
};

export default App;
```
