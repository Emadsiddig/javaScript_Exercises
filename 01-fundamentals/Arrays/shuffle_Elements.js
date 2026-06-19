
function shuffle(arr){
  let count = arr.length,temp,index;

  while(count > 0){

    index = Math.floor(Math.random() * count);
      count--;
  
    temp = arr[count];
    arr[count] = arr[index];
    arr[index] = temp;
  } 
  console.log(arr);
}
var arr = [2,3,4,5,6,8,3,9];
shuffle(arr);
