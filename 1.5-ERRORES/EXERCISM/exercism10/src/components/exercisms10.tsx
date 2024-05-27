
export const score = (x: number, y: number): number => {
  const distanceToCenter = Math.sqrt(x * x + y * y);

  if (distanceToCenter <= 1) {
    return 10; 
  } else if (distanceToCenter <= 5) {
    return 5; 
  } else if (distanceToCenter <= 10) {
    return 1; 
  }

  return 0; 
};

const DartScore = ({ x, y }: { x: number, y: number }) => {
  const dartScore = score(x, y);

  return (
    <div>
      <p>Puntuación para el tiro en ({x}, {y}): {dartScore}</p>
    </div>
  );
};

export default DartScore;
