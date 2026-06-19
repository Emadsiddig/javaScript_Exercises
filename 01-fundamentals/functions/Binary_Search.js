function Binary_Search(arr,key){
    console.log(arr);
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

let array = [2,5,7,8,6,3];
array.sort((a,b)=> a-b);
console.log('The key is in index  ' + Binary_Search(array,6));