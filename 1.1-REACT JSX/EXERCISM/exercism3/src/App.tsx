import React from 'react';
import ReactDOM from 'react-dom';
import ResistorColorCode from './components/exercism3';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Mi Aplicación</h1>
        <ResistorColorCode />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));


