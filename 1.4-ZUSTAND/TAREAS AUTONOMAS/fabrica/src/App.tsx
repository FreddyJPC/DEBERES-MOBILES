import ReactDOM from 'react-dom';
import FactoryComponent from './components/FactoryComponent';

const App = () => {
  return (
    <div>
      <FactoryComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
