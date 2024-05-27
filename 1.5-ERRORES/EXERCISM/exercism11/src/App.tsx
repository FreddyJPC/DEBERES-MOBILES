import React from 'react';
import PangramChecker from './components/exercism11';

const App = () => {
  return (
    <div>
      <h1>Comprobador de Pangramas</h1>
      <PangramChecker input="The quick brown fox jumps over the lazy dog" />
      <PangramChecker input="Hola mundo" />
    </div>
  );
};

export default App;
