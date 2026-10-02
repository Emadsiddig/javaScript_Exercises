const sequenceSum = (begin, end, step) => {

 let sum = 0;
 for(let curr = begin; curr <= end ; curr+=step){
    sum +=curr;
 }
  return sum;
};

console.log(sequenceSum(4,5,1));