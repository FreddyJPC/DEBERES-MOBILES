import React from 'react';
import DartScore from './components/exercisms10';

const App = () => {
  return (
    <div>
      <h1>Puntuación de Dardos</h1>
      <DartScore x={0} y={0} />
      <DartScore x={2} y={3} />
      <DartScore x={4} y={4} />
      <DartScore x={8} y={8} />
    </div>
  );
};

export default App;
