function Binary_Search(arr,key){
  
    let left = 0;
    let right = arr.length -1;

while(left <= right){
    
    let median = Math.floor((right + left)/2);
    if(arr[median] === key){
      return median;
    }

    if(arr[median] < key){
       left = median +1;
    }else{
       right = median -1;
    }
}
return -1;

}

let array = [2,3,5,6,7,8,6,3,2]
console.log(Binary_Search(array,2));