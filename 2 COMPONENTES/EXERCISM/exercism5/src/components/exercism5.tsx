import React from 'react';

const COLOR: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const METRIC: string[] = [
  ' ohms',
  '0 ohms',
  ' kiloohms',
  ' kiloohms',
  '0 kiloohms',
  ' megaohms',
  ' megaohms',
  ' megaohms',
  '0 megaohms',
  ' gigaohms',
];

const DecodedResistorValue: React.FC<{ colors: string[] }> = ({ colors }) => {
  let res = 0;

  for (let i = 0; i < 2; i++) {
    res = res * 10 + COLOR.findIndex((col: string) => col === colors[i]);
  }

  if (res % 10 === 0) {
    res /= 10;
  }

  const metric = METRIC[COLOR.findIndex((col: string) => col === colors[2])];

  return <div>Decoded resistor value: {`${res}${metric}`}</div>;
};

export default DecodedResistorValue;
