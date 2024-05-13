
const LeapYearChecker = ({ year }: { year: number }) => {
  const isLeap = (year: number) => {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  
    return false;
  };

  return (
    <div>
      <p>{year} es {isLeap(year) ? 'bisiesto' : 'no bisiesto'}.</p>
    </div>
  );
};

export default LeapYearChecker;
