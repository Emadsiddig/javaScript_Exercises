function merge(arr1,arr2){

    for(let i =0;i<arr2.length;i++){
       let duplicate = false;
       for(let j = 0; j < arr1.length;j++){
         if(arr2[i] == arr1[j]){
            duplicate=true;
            break;
         }
       }

      if(!duplicate){
         arr1.push(arr2[i]);
      }
    }
    console.log(arr1);
}

var array1  =[1,3,4,5,6,7];
var array2  =[8,3,48,9,23,7];
merge(array1,array2);