import React from 'react';
import DecodedValue from './components/exercism4'; // Asegúrate de tener la ruta correcta al componente DecodedValue

const App: React.FC = () => {
  return (
    <div>
      <h1>My React App</h1>
      <DecodedValue colors={["brown", "black"]} />
    </div>
  );
};

export default App;
