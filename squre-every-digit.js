function squareDigits(num) {
  
  let numStr = String(num);
  let digitsArray = numStr.split('');
  let squaredArray = digitsArray.map(digit => digit * digit);

  let joinedStr = squaredArray.join('');
    return Number(joinedStr);
}