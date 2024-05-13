import React from 'react';
import DecodedResistorValue from './components/exercism5'; // Asegúrate de tener la ruta correcta al componente DecodedResistorValue

const App: React.FC = () => {
  return (
    <div>
      <h1>My React App</h1>
      <DecodedResistorValue colors={["brown", "black", "green"]} />
    </div>
  );
};

export default App;
