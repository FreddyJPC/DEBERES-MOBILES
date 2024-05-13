import LeapYearChecker from './components/exercism6';

const App = () => {
  return (
    <div>
      <h1>Comprobador de Año Bisiesto</h1>
      <LeapYearChecker year={2024} />
      <LeapYearChecker year={2023} />
    </div>
  );
};

export default App;
