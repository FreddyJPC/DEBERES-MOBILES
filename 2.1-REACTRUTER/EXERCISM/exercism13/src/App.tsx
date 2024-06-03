import { Matrix } from './components/exercism13';

const App = () => {
  const matrixString = "1 2 3\n4 5 6\n7 8 9";
  const matrix = new Matrix(matrixString);

  return (
    <div>
      <h1>Matrix</h1>
      <h2>Rows:</h2>
      {matrix.rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.join(', ')}
        </div>
      ))}
      <h2>Columns:</h2>
      {matrix.columns.map((col, colIndex) => (
        <div key={colIndex}>
          {col.join(', ')}
        </div>
      ))}
    </div>
  );
};

export default App;
