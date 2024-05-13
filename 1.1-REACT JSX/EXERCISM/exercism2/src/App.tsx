import React from 'react';
import CookieDistribution from './components/exercism2';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Cookie Distribution</h1>
        <CookieDistribution name="Do-yun" />
        <CookieDistribution name="John" />
      </div>
    );
  }
}

export default App;



