function Perfect_Number(num){
 let arrOfPossibleDivisors = [];
 let sum = 0;
 for(let i =0;i<num;i++){
    if(num %i == 0){
     sum +=i;
    }
   }

  if(sum==num){
    return true;
 }else{
    return false;
 }
}
console.log(Perfect_Number(6));
console.log(Perfect_Number(23));
console.log(Perfect_Number(28));