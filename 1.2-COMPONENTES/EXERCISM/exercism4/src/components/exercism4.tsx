import React from 'react';

interface DecodedValueProps {
  colors: string[];
}

const DecodedValue: React.FC<DecodedValueProps> = ({ colors }) => {
  const decodedValue = (colors: string[]): number => {
    const colorValues: Record<string, number> = {
      "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "grey": 8,
      "white": 9,
    };

    const color1 = colorValues[colors[0]];
    const color2 = colorValues[colors[1]];

    return color1 * 10 + color2;
  };

  return <div>Decoded value: {decodedValue(colors)}</div>;
};

export default DecodedValue;
