let arr = [1,2,2,2,3,4,4,5,2,3,4];


let frequnce ={};
let count = 0;
let mostFreq ;
for(let i=0;i<arr.length;i++){
   let num = arr[i];

   frequnce[num] = (frequnce[num] || 0) +1;

   if(frequnce[num] > count){
    count = frequnce[num];
    mostFreq = num;
   } 
}

console.log('the most frequnce Element is : ' + mostFreq);