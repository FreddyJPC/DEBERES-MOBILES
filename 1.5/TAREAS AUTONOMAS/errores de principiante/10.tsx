import React from 'react';

const Hijo = React.memo(({ nombre }) => {
  console.log('Renderizado hijo');
  return <p>{nombre}</p>;
});

function Padre() {
  const nombre = 'Juan';

  return (
    <div>
      <Hijo nombre={nombre} />
    </div>
  );
}

export default Padre;
