import React from 'react';

class ResistorColorCode extends React.Component {
  colorCode(color: string) {
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const index = colors.indexOf(color.toLowerCase());
    
    if (index === -1) {
      throw new Error('Invalid color');
    }
    
    return index;
  }

  render() {
    const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    return (
      <div>
        <h2>Resistor Color Codes</h2>
        <h3>Band Colors:</h3>
        <ul>
          {COLORS.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResistorColorCode;
