


function Sum_squeres(arr){
let res  =0;
let i=arr.length;

while(i--){

    res +=  Math.pow(arr[i] , 2);

    
}
return res; 
}

let array = [2,4,5];
console.log(Sum_squeres(array));