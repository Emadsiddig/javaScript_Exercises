function getMiddle(s) {
  const middle = Math.floor(s.length/2);
  if(s.length % 2 === 0 ){
   const mid1 = s[middle -1];
   const mid2 = s[middle];
   return   `${mid1}${mid2}`;
   
  }else {
    return s[middle];
  }
}

console.log(getMiddle('testing'));
console.log(getMiddle('middle'));