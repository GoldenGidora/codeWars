function divisors(integer) {
  let string;
  let counter = -1;
  let array = [];
  let emptyArray = [];
  if (integer > 1) {
    for (let i = 1; i <= integer; i++) {
      if (integer % i == 0 && i > 1 && i !== integer) {
        counter++;
        array[counter] = i;
      } else if(i == integer && array.length == 0) {
        string = `${integer} is prime`;
        return string;
      }
    }
  } else {
    return;
  }
  return array;
};