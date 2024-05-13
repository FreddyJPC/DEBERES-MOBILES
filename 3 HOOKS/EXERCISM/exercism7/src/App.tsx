import RnaConverter from './components/exercism7';

const App = () => {
  return (
    <div>
      <h1>Convertidor de ADN a ARN</h1>
      <RnaConverter dna="GCTA" />
    </div>
  );
};

export default App;
