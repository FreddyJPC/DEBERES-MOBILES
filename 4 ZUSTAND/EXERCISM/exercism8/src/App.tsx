import AgeCalculator from './components/exercisms7';

const App = () => {
  return (
    <div>
      <h1>Calculadora de Edad en Otros Planetas</h1>
      <AgeCalculator planet="mercury" seconds={1000000000} />
      <AgeCalculator planet="venus" seconds={1000000000} />
      <AgeCalculator planet="earth" seconds={1000000000} />
      <AgeCalculator planet="mars" seconds={1000000000} />
      <AgeCalculator planet="jupiter" seconds={1000000000} />
      <AgeCalculator planet="saturn" seconds={1000000000} />
      <AgeCalculator planet="uranus" seconds={1000000000} />
      <AgeCalculator planet="neptune" seconds={1000000000} />
    </div>
  );
};

export default App;
