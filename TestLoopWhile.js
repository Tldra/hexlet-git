const smallestDivisor = (num) => {
    if (num < 1) {
      return NaN;
    }
    if (num === 1) {
      return num;
    }
    let acc = 2;
      while (num % acc !== 0) {
      acc = acc + 1;
  } 
  return acc;
  };